import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-preview-finish',
  templateUrl: './project-preview-finish.component.html',
  styleUrls: ['./project-preview-finish.component.css']
})
export class ProjectPreviewFinishComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() content:string;
  constructor() { }

  ngOnInit(): void {
  }

}
