import { Component, OnInit } from '@angular/core';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';

@Component({
  selector: 'app-sprintbacklog',
  templateUrl: './sprintbacklog.component.html',
  styleUrls: ['./sprintbacklog.component.css']
})

export class SprintBacklogComponent implements OnInit {
  projectId : number;
  projectTitle: string;
  storyId : number;
  cardStore: SprintBacklog;

  // stock the promises
  private subs: any[] = [];

  constructor(private sprintBacklogService: SprintBacklogService) { }

  ngOnInit(): void {
    this.projectId = Number(sessionStorage.getItem("projectId"));
    this.projectTitle = sessionStorage.getItem("projectTitle");
    this.storyId = Number(sessionStorage.getItem("storyId"));
    this.initBacklog();
  }

  private initBacklog() {
    this.subs.push(
      this.sprintBacklogService.getSprintBacklog(this.projectId, this.storyId).subscribe((data : SprintBacklog[])=> {
        this.cardStore = new SprintBacklog(data[0]);
      })
    );
  }

  updateSprintBacklog() {
    this.sprintBacklogService.updateSprintBacklog(Number(sessionStorage.getItem("projectId")), Number(sessionStorage.getItem("storyId")), this.cardStore);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
