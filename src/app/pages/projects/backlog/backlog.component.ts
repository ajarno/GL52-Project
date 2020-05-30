import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  item: string;
  prioritization: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'aaa', prioritization: 'High', status: 'done'},
]
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  displayedColumns: string[] = ['item', 'prioritization', 'status'];
  dataSource = ELEMENT_DATA;
  project:string;
  constructor() { }
  ngOnInit(): void {
    if(localStorage.getItem("project")!=null){
      this.project=localStorage.getItem("project");
    }
  }

}
