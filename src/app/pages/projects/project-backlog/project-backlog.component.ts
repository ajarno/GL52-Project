import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { ProjectService } from "../../../core/services/project.service";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-project-backlog",
  templateUrl: "./project-backlog.component.html",
  styleUrls: ["./project-backlog.component.css"]
})
export class ProjectBacklogComponent implements OnInit, OnDestroy {
  id: number;
  title: string;

  constructor(private projectService: ProjectService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["item", "priority", "status"];
  dataSource = new MatTableDataSource();;

  private subs: any[] = [];

  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem("projectId"));
    this.title = sessionStorage.getItem("projectTitle");
    this.initBacklog();
    this.dataSource.sort = this.sort;
  }

  private initBacklog() {
    this.subs.push(
      this.projectService.getProductBacklog(this.id).subscribe(data => {
        this.dataSource.data = data[0].tasks;
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
