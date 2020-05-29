import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  project:string;
  constructor() { }
  ngOnInit(): void {
    if(localStorage.getItem("project")!=null){
      this.project=localStorage.getItem("project");
    }
  }

}
