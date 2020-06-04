import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-preview-finish',
  templateUrl: './project-preview-finish.component.html',
  styleUrls: ['./project-preview-finish.component.css']
})
export class ProjectPreviewFinishComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() content:string;

  role: string;
  
  @Output() reOpened = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
  }

  reOpen(): void {
    this.reOpened.emit(this.id);
  }
}
