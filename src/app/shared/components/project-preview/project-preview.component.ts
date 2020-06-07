import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-preview",
  templateUrl: "./project-preview.component.html",
  styleUrls: ["./project-preview.component.css"],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() index: number;

  role: string;
  
  @Output() finished = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
  }

  finish(): void {
    this.finished.emit(this.id);
  }

  delete(): void {
    this.deleted.emit(this.id);
  }

  storeID(): void {
    this.router.navigate(["/projects/" + this.id + "/productbacklog"]);
    sessionStorage.setItem("projectId", this.id.toString());
    sessionStorage.setItem("projectTitle", this.title);
  }
}
