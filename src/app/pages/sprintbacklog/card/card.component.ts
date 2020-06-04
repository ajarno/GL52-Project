import { Component, Input, OnInit } from '@angular/core';
//import { Cardschema } from '../cardschema';
//import { Cardstore } from '../../../shared/models/cardstore';
import { Listtask } from '../../../shared/models/Listtask';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import { Task } from 'src/app/shared/models/Task';
import { SprintBacklog } from 'src/app/shared/models/SprintBacklog';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() card: Task;
  @Input() cards: SprintBacklog;
  @Input() list: Listtask;
  today: Date;
  notFinished: boolean;

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) { 
      
    this.today = new Date();
    }
 
  ngOnInit() { 
    this.notFinished = (this.list.name != 'Terminé');
  }
 
  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55vh";
    
    if(this.card.getDeadline()) {
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
    console.log("Dialog input:", dialogConfig.data);

    let dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output:", data);
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
        }
      }
    });   
  }

  _onDeleteClicked(): void {
    this.cards.deleteCard[this.card.getId()];
    const index = this.list.cards.indexOf(this.card.getId()); 
    this.list.cards.splice(index, 1);
  }

  _openSnackBar() {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = 3000;

    let snackBarRef = this.snackBar.open("La tâche \"" + this.card.getTitle() + "\" a bien été supprimée", 
                  "Annuler", 
                  config);

    snackBarRef.onAction().subscribe(() => {
      console.log('La suppression a été annulée');
      const cardId =  this.cards.newCard(this.card.getTitle(), this.card.getDescription(), this.card.getMembers(), this.card.getDeadline(), this.card.getPriority());
      this.list.cards.push(cardId);
    });
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