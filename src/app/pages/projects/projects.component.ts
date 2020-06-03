import { Component, OnInit, Input } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ProjectService } from "../../core/services/project.service";
import { Project } from "src/app/shared/models";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  role: string;
  projects: Observable<Project[]>;
  projectsInit: any[] = [{ name: "NEW" }];
  projectsFinished: any[] = [];
  cardFinished = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.projectsFinished;
    })
  );
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.projectsInit;
    })
  );
  @Input() project: string;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.projects = this.projectService.getProjects();
    this.projects.subscribe((data) => {
      data.forEach((value) => {
        if (value["status"] == "not finished") {
          this.projectsInit.push(value);
        } else {
          this.projectsFinished.push(value);
        }
      });
    });

    if (this.role == "Scrum Team") {
      this.projectsInit.splice(0, 1);
    }
  }
  finish(projectId: number): void {
    this.projectsInit.forEach((value) => {
      if (value["id"] == projectId) {
        value["status"] = "finished";
        this.projectService.finishProject(value).subscribe(() => {
          this.projectService
            .getProjects()
            .subscribe((projectsAfterDeletion: Project[]) =>
              console.log("projectsAfterDeletion: ", projectsAfterDeletion)
            );
        });
      }
    });
    this.reflash();
  }

  delete(projectId: number): void {
    this.projectService
      .getProjects()
      .subscribe((projectsBeforeDeletion: Project[]) => {
        console.log("projectsBeforeDeletion: ", projectsBeforeDeletion);
        this.projectService.deleteProject(projectId).subscribe(() => {
          this.projectService.getProjects().subscribe(
            (projectsAfterDeletion: Project[]) =>
              (this.projectsInit = projectsAfterDeletion)
            // console.log("projectsAfterDeletion: ", projectsAfterDeletion),
          );
        });
      });
      this.reflash();
  }
  reflash():void{
    window.location.reload()
  }
}
