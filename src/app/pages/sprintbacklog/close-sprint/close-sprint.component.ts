import { Component, OnInit, Inject } from '@angular/core';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';
import { ProductBacklogService } from 'src/app/core/services/product-backlog.service';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProductBacklog } from 'src/app/shared/models/product-backlog.model';
import { Story } from 'src/app/shared/models/story.model';
import { Router } from '@angular/router';
import { NewSprintComponent } from '../../project-backlog/new-sprint/new-sprint.component';

export interface DialogData {
  backlog: SprintBacklog
}

@Component({
  selector: 'app-close-sprint',
  templateUrl: './close-sprint.component.html',
  styleUrls: ['./close-sprint.component.css']
})
export class CloseSprintComponent implements OnInit {
  // dialog base attributes
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  // utils
  productBacklog: ProductBacklog;
  stories: Array<Story> = null;
  toDo: number;
  doing: number;
  done: number;

  backlog: SprintBacklog;

  selectedStory: string = '';

  constructor(private router: Router, private dialog: MatDialog, private sprintBacklogService: SprintBacklogService, private productBacklogService: ProductBacklogService,
    private dialogRef: MatDialogRef<CloseSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
      this.backlog = data.backlog;

      this.toDo = this.backlog.getTasksIdForStatus("To do").length;
      this.doing = this.backlog.getTasksIdForStatus("Doing").length;
      this.done = this.backlog.getTasksIdForStatus("Done").length;

      productBacklogService.getProductBacklog(Number(sessionStorage.getItem("projectId"))).subscribe(data => {
        const list = (data[0].stories) ? data[0].stories : [];
        this.productBacklog = new ProductBacklog(data[0].projectId, list, data[0].id);
        
        this.stories = this.productBacklog.getStories().filter((story: Story) =>
          (story.getId() !== this.backlog.getStoryId()) && (story.getStatus() === "To do")
        );        
      });
  }

  ngOnInit() { }

  close() {
    this.sprintBacklogService.deleteSprintBacklog(this.backlog.getSprintId()).subscribe(() => {
      this.dialogRef.close();
    });
    this.productBacklog.updateStoryStatus(sessionStorage.getItem("storyId"), "Done");
    this.productBacklogService.updateProductBacklog(this.productBacklog).subscribe(() => {});
    this.router.navigate([`/projects/${this.productBacklog.getProjectId()}/productbacklog`]);
  }

  transfer() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55vh";
    dialogConfig.data = {

      storyId: this.backlog.getStoryId(),
      projectId: this.productBacklog.getProjectId(),
      sprintName: this.selectedStory,
      tasks: this.backlog.getUnfinishedTasks()
    };
    
    let dialogRef = this.dialog.open(NewSprintComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const id: string = this.productBacklog.getStories().find((story: Story) => story.getName() === this.selectedStory).getId();
        this.productBacklog.updateStoryStatus(id, "Doing");
        this.productBacklogService.updateProductBacklog(this.productBacklog).subscribe(() => {
          this.close();
        });
      }
    });
  }

  dismiss() {
    this.dialogRef.close();
  }
}
