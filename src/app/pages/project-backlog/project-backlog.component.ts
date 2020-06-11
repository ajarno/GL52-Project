import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductBacklogService } from 'src/app/core/services/product-backlog.service';
import { Router } from '@angular/router';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewStoryComponent } from './new-story/new-story.component';
import { ProductBacklog } from 'src/app/shared/models/product-backlog.model';


@Component({
  selector: "app-project-backlog",
  templateUrl: "./project-backlog.component.html",
  styleUrls: ["./project-backlog.component.css"]
})
export class ProjectBacklogComponent implements OnInit, OnDestroy {
  id: number;
  title: string;
  role: string;

  constructor(private router: Router, private dialog: MatDialog, private productBacklogService: ProductBacklogService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["story", "priority", "status"];
  dataSource = new MatTableDataSource();;

  private backlog: ProductBacklog;
  private subs: any[] = [];

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.id = Number(sessionStorage.getItem("projectId"));
    this.title = sessionStorage.getItem("projectTitle");
    this.initBacklog();
    this.dataSource.sort = this.sort;
  }

  private initBacklog() {
    this.subs.push(
      this.productBacklogService.getProductBacklog(this.id).subscribe(data => {
        const list = (data[0].stories) ? data[0].stories : [];
        this.backlog = new ProductBacklog(data[0].projectId, list, data[0].id);
        this.dataSource.data = list;
      })
    );
  }

  currentSprintExist(): boolean {
    return this.dataSource.data.some(el => el['status'] === 'Doing');
  }

  openSprintBacklog(element) {
    if (element.status === "Doing") {
      sessionStorage.setItem("storyId", element.id)
      this.router.navigate(["/projects/" + this.id + "/sprintbacklog"]);
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  openSprintDialog(storyId: string, storyName: string) {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55vh";
    dialogConfig.data = {
      storyId: storyId,
      projectId: this.id,
      sprintName: storyName,
    };
    
    let dialogRef = this.dialog.open(NewSprintComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.backlog.getStories().find(story => story.getId() === storyId).setStatus("Doing");
        this.dataSource.data = this.backlog.getStories();
        this.productBacklogService.updateProductBacklog(this.backlog).subscribe(() => {});
      }
    });
  }
  
  openStoryDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55vh";

    let dialogRef = this.dialog.open(NewStoryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.backlog.addStory(data.name, data.priority);
        this.dataSource.data = this.backlog.getStories();
        this.productBacklogService.updateProductBacklog(this.backlog).subscribe(() => {});
      }
    });
  }
}
