import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../../../core/services/project.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.css"],
})
export class NewProjectComponent implements OnInit {

  members: string[] = ["Alice", "Bob"];
  memberChecked: boolean[] = [false, false];
  projectMembers: string[] = [];
  name: string;
  description: string;
  project: any;

  addMembers(i: number): void {
    if (!this.memberChecked[i]) {
      this.projectMembers.push(this.members[i]);
    } else {
      let index = this.projectMembers.indexOf(this.members[i]);
      this.projectMembers.splice(index, 1);
    }
  }
  constructor(private projectService: ProjectService, private router: Router) {}
  
  ngOnInit(): void {}

  createNewProject() {
    this.project = {
      name: this.name,
      description: this.description,
      status: "not finished",
    };
    this.projectService.createNewProject(this.project).subscribe();
    this.router.navigate(["/projects"]);
  }
}
