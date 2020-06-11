import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Router } from "@angular/router";
import { Validators, FormControl } from '@angular/forms';
import { Project } from 'src/app/shared/models/project.model';
import { ProductBacklogService } from 'src/app/core/services/product-backlog.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { ProductBacklog } from 'src/app/shared/models/product-backlog.model';

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

  projectFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private projectService: ProjectService, private productBacklogService: ProductBacklogService, private router: Router) {}

  ngOnInit(): void {}

  createNewProject() {
    const project: Project = new Project(this.name, this.description, "in progress" /*, this.users, */);
    this.projectService.createProject(project).subscribe((newCreatedProject: any) => {
      if (newCreatedProject.id) this.productBacklogService.createProductBacklog(new ProductBacklog(newCreatedProject.id)).subscribe(() => 
        this.router.navigate(["/projects"])
      );
    });
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
