import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { ProjectService } from "../../core/services/project.service";
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  role: string;
  projectsInit: Array<Project> = new Array();
  projectsFinished: Array<Project> = new Array();
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

  breakpoint: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.initRole();
    this.initProjects();
    this.breakpoint = (window.innerWidth <= 720) ? 1 : (window.innerWidth <= 1000) ? 2 : 4;
  }

  private initRole() {
    this.role = localStorage.getItem("role");
  }

  private initProjects() {
    this.subs.push(
      this.projectService.getProjects().subscribe((data: any[]) => {
        data.forEach(proj => {
          const project: Project = new Project(
            proj.name,
            proj.description,
            proj.status,
            proj.id
          );
          project.getStatus() === "finished"
            ? this.projectsFinished.push(project)
            : this.projectsInit.push(project);
        });
      })
    );
  }

  finish(projectId: number): void {
    const project: Project = this.projectsInit.find(
      project => project.getId() == projectId
    );
    if (project !== undefined) {
      project.setStatus("finished");
      this.subs.push(
        this.projectService.updateProject(project).subscribe(() => {
          this.projectsInit.splice(this.projectsInit.indexOf(project), 1);
          this.projectsFinished.push(project);
        })
      );
    }
  }

  reOpen(projectId: number): void {
    const project: Project = this.projectsFinished.find(
      project => project.getId() == projectId
    );
    if (project !== undefined) {
      project.setStatus("in progress");
      this.subs.push(
        this.projectService.updateProject(project).subscribe(() => {
          this.projectsFinished.splice(
            this.projectsFinished.indexOf(project),
            1
          );
          this.projectsInit.push(project);
        })
      );
    }
  }

  delete(projectId: number): void {
    this.subs.push(
      this.projectService.deleteProject(projectId).subscribe(() => {
        this.projectsInit.splice(
          this.projectsInit.indexOf(
            this.projectsInit.find(project => project.getId() == projectId)
          ),
          1
        );
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
