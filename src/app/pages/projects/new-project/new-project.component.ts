import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { ProjectService } from "../../../core/services/project.service";
import { Router } from "@angular/router";
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.css"],
})
export class NewProjectComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  users: any[] = [];
  name: string;
  description: string;
  project: any;

  projectFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {}

  createNewProject() {
    this.project = {
      name: this.name,
      description: this.description,
      status: "in progress",
      users: this.users,
    };
    this.projectService.createProject(this.project).subscribe(() =>
      this.router.navigate(["/projects"])
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      this.users.push(value.trim());
    }

    if (input) {
      input.value = "";
    }
  }

  remove(user: any): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
