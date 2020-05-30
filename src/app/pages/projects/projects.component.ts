import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

export interface Project {
  id: number;
  title: string;
  cols: number;
  rows: number;
  content: string;
}
let  projects:Project[]=[
{ title: 'NEW', id:0, cols: 1, rows: 1, content:null },
{ title: 'Project 1', id:1, cols: 1, rows: 1, content:'This project...' },
{ title: 'Project 2', id:2, cols: 1, rows: 1, content:'This project...' },
{ title: 'Project 3', id:3, cols: 1, rows: 1, content:'This project...' },
{ title: 'Project 4', id:4, cols: 1, rows: 1, content:'This project...' }
]
let projectsFinished:Project[]=[]

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  role:string;
  carda=this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return projectsFinished;
    })
    );
  cards =this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return projects;
      // if(localStorage.getItem("role")!='Scrum Team'){
      //   if (matches) {
      //     return [
      //       { title: 'NEW', cols: 1, rows: 1 },
      //       { title: 'Project 1', id:1, cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 2', id:2, cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 3', id:3, cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 4', id:4, cols: 1, rows: 1, content:'This project...' }
      //     ];
      //   }
      //   return [
      //     { title: 'NEW', cols: 1, rows: 1 },
      //       { title: 'Project 1', id:1,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 2', id:2,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 3', id:3,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 4', id:4,cols: 1, rows: 1, content:'This project...' }
      //   ];
      // }else{
      //   if (matches) {
      //     return [
      //       { title: 'Project 1', id:1,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 2', id:2,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 3', id:3,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 4', id:4,cols: 1, rows: 1, content:'This project...' }
      //     ];
      //   }
      //   return [
      //       { title: 'Project 1', id:1,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 2', id:2,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 3', id:3,cols: 1, rows: 1, content:'This project...' },
      //       { title: 'Project 4', id:4,cols: 1, rows: 1, content:'This project...' }
      //   ];
      // }
      

      
    })
  );
  @Input() project: string;
  constructor(private breakpointObserver: BreakpointObserver,private router : Router) { }

  ngOnInit(): void {
    this.role=localStorage.getItem("role");
    if(this.role=="Scrum Team"){
      projects.splice(0,1);
    }

  }
  finish(index:number):void{
    projectsFinished.push(projects[index]);
    projects.splice(index,1);

  }
  delete(index:number):void{
    projects.splice(index,1);
  }
}
