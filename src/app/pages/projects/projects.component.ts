import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { ProjectService } from "../../core/services/project.service";
import { Project } from "src/app/shared/models";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  role: string;
  projectsInit: any[] = [];
  projectsFinished: any[] = [];
  private subs: Array<any> = []; // store the promises to unsubscribe if pending while exiting page

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.initRole();
    this.initProjects();
  }

  private initRole() {
    this.role = localStorage.getItem("role");
  }

  private initProjects() {
    this.subs.push(
      this.projectService.getProjects().subscribe(data => {
        data.forEach(project => {
          if (project["status"] === "finished") {
            this.projectsFinished.push(project);
          } else {
            this.projectsInit.push(project);
          }
        });
      })
    );
  }

  finish(projectId: number): void {
    this.subs.push(this.projectsInit.forEach(project => {
      if (project["id"] == projectId) {
        project["status"] = "finished";
        this.projectService.updateProject(project).subscribe(() => {
          this.reflash();
        });
      }
    }));
  }

  reOpen(projectId: number): void {
    this.subs.push(this.projectsFinished.forEach(project => {
      if (project["id"] == projectId) {
        project["status"] = "in progress";
        this.projectService.updateProject(project).subscribe(() => {
          this.reflash();
        });
      }
    }));
  }

  delete(projectId: number): void {
    this.subs.push(
      this.projectService.deleteProject(projectId).subscribe(() => {
        this.reflash();
      })
    );
  }

  reflash(): void {
    window.location.reload();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
