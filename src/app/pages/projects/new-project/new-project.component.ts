import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})

export class NewProjectComponent implements OnInit {

  members:string[]=['Alice','Bob']
  memberChecked:boolean[]=[false,false]
  projectMembers:string[]=[]
  name:string;
  description:string;

  addMembers(i:number):void{
    if(!this.memberChecked[i]){
      this.projectMembers.push(this.members[i])
    }else{
      let index = this.projectMembers.indexOf(this.members[i]);
      this.projectMembers.splice(index, 1);
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}


