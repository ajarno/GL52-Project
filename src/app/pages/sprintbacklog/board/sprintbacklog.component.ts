import { Component, OnInit } from '@angular/core';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CloseSprintComponent } from '../close-sprint/close-sprint.component';

@Component({
  selector: 'app-sprintbacklog',
  templateUrl: './sprintbacklog.component.html',
  styleUrls: ['./sprintbacklog.component.css']
})

export class SprintBacklogComponent implements OnInit {
  role: string;
  projectId: number;
  projectTitle: string;
  storyId: string;
  cardStore: SprintBacklog;

  // stock the promises
  private subs: any[] = [];

  constructor(private sprintBacklogService: SprintBacklogService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.projectId = Number(sessionStorage.getItem("projectId"));
    this.projectTitle = sessionStorage.getItem("projectTitle");
    this.storyId = sessionStorage.getItem("storyId");
    this.initBacklog();
  }

  private initBacklog() {
    this.subs.push(
      this.sprintBacklogService.getSprintBacklog(this.projectId, this.storyId).subscribe((data: any[]) => {
        const sprint = data[0];
        this.cardStore = new SprintBacklog(sprint.storyId, sprint.projectId, sprint.sprintName, sprint.startDate, sprint.endDate, sprint.tasks, sprint.id);
      })
    );
  }

  updateSprintBacklog() {
    this.subs.push(this.sprintBacklogService.updateSprintBacklog(this.cardStore).subscribe(() => { }));
  }

  closeSprint() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70vh";
    dialogConfig.data = { backlog: this.cardStore };
    
    this.dialog.open(CloseSprintComponent, dialogConfig);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
