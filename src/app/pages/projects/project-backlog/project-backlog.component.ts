import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductBacklogService } from 'src/app/core/services/product-backlog.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-project-backlog",
  templateUrl: "./project-backlog.component.html",
  styleUrls: ["./project-backlog.component.css"]
})
export class ProjectBacklogComponent implements OnInit, OnDestroy {
  id: number;
  title: string;

  constructor(private router: Router, private productBacklogService: ProductBacklogService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["story", "priority", "status"];
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
      this.productBacklogService.getProductBacklog(this.id).subscribe(data => {
        this.dataSource.data = data[0].stories;
      })
    );
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
}
