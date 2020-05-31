import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() content:string;
  @Input() index:number;
  role:string;
  @Output() finished=new EventEmitter<number>();
  @Output() deleted=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem("role");
  }
  finish():void{
    this.finished.emit(this.index);
  }
  delete():void{
    this.deleted.emit(this.index);
  }
  storeID():void{
    localStorage.setItem("id",this.id.toString());
  }

}
