import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Task } from 'src/app/shared/models/task.model';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';
import { EditDialogComponent } from 'src/app/pages/sprintbacklog/edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  _card: Task;
  @Input() set card(card: Task) {
    if (card) {
      this._card = card;
      this.notFinished = (this.card.getStatus() !== 'Done');
    }
  }
  get card(): Task {
    return this._card;
  };
  @Input() cards: SprintBacklog;
  @Input() list: Array<string>;
  today: Date;
  notFinished: boolean;

  @Output() updated = new EventEmitter<string>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private service: SprintBacklogService) { }
    
  ngOnInit() { 
    this.today = new Date();
  }
 
  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55vh";
    
    if (this.card.getDeadline()) {
      dialogConfig.data = {
        title: this.card.getTitle(),
        description: this.card.getDescription(),
        deadline: this.card.getDeadline().toDateString(),
        members: this.card.getMembers(),
        priority: this.card.getPriority()
      };
    } else {
      dialogConfig.data = {
        title: this.card.getTitle(),
        description: this.card.getDescription(),
        deadline: null,
        members: this.card.getMembers(), 
        priority: this.card.getPriority()
      };
    }

    let dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        
        if(data == "delete") {
          this._openSnackBar();
          this._onDeleteClicked();

        } else {
          this.card.setTitle(data.title);
          this.card.setDescription(data.description);
          this.card.setDeadline(data.deadline) ;
          this.card.setMembers(data.members);
          this.card.setPriority(data.priority);
          this.updateSprint();
        }
      }
    });   
  }

  _onDeleteClicked(): void {
    this.cards.deleteCard(this.card.getId());
    this.list.splice(this.list.indexOf(this.card.getId()), 1);
    this.updateSprint();
  }

  _openSnackBar() {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = 3000;

    let snackBarRef = this.snackBar.open("La tâche \"" + this.card.getTitle() + "\" a bien été supprimée", 
                  "Annuler", 
                  config);

    snackBarRef.onAction().subscribe(() => {
      const cardId =  this.cards.newCard(this.card.getTitle(), this.card.getStatus(), this.card.getDescription(), this.card.getMembers(), this.card.getDeadline(), this.card.getPriority());
      this.list.push(cardId);
      // update backlog manually since event emitter not catch by list
      this.service.updateSprintBacklog(this.cards).subscribe(() => {}); 
    });
  }

  updateSprint() {
    this.updated.emit();
  }

  public compareDatetoToday(date : Date): string {
    let d = new Date(date); 
    let today = new Date();
    today.setHours(0,0,0,0);

    // Check if the dates are near
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    let dayDifference = Math.round((d.getTime() - today.getTime())/(oneDay));
    if (dayDifference < 3 && dayDifference > -1) return 'near';

    else {
      // Check if the first is greater than second
      if (d > today) return 'else';
  
      // Check if the first is less than second
      if (d < today) return 'late';
    }
  }

  remove(member: string): void {
    const index = this.card.getMembers().indexOf(member);
    if (index >= 0) this.card.getMembers().splice(index, 1);
  }

  displayOthers() {
    let others = Object.assign([], this.card.getMembers());
    others.splice(0, 2);

    return others.join('\n');
  }

  openViewDialog(templateRef) {
    this.dialog.open(templateRef, {
      maxWidth: '30vw',
      minHeight: 'auto',
      data: { title: this.card.getTitle(), description: this.card.getDescription(), members: this.card.getMembers(), priority: this.card.getPriority() }
    });
  }
}