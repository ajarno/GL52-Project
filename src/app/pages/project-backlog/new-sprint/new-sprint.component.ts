import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Task } from 'src/app/shared/models/task.model';
import { FormControl, Validators } from '@angular/forms';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';

export interface DialogData {
  storyId: string;
  projectId: number;
  sprintName: string;
  startDate : Date;
  endDate : Date;
  tasks: Array<Task>;
}

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {
  // dialog base attributes
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  // utils
  duration: string;
  today = new Date();
  
  // required fields to create the sprint
  private id: string;
  private storyId: string;
  private projectId: number;
  sprintName;
  startDate = new FormControl(new Date(), [Validators.required]);
  endDate = new FormControl(new Date(), [Validators.required]);
  private tasks: Array<Task>;

  constructor(private sprintBacklogService: SprintBacklogService,
    private dialogRef: MatDialogRef<NewSprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.storyId = data.storyId;
      this.sprintName = new FormControl(data.sprintName, [Validators.required]);
      this.projectId = data.projectId;
      this.tasks = (data.tasks) ? data.tasks : [];
      this.duration = "2";
      this.changeDuration();      
  }

  ngOnInit() { }

  changeDuration() {
    const calcDate = new Date(this.startDate.value)
    calcDate.setDate(calcDate.getDate() + Number(this.duration) * 7);
    
    this.endDate.reset(calcDate);
  }

  togglePersonalized() {
    this.duration = "";
  }

  save() {
    const newSprint: SprintBacklog = new SprintBacklog(this.storyId, this.projectId, this.sprintName.value, this.startDate.value, this.endDate.value, this.tasks);
    this.sprintBacklogService.createSprintBacklog(newSprint).subscribe((data) => {
      this.dialogRef.close(data);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
