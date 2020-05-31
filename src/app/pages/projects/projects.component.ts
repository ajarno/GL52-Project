import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { Project } from 'src/app/shared/models';

let projectsInit : any[]=[{name:'NEW'}];
let projectsFinished : any[]=[];
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  role:string;
  projects: Observable<Project[]>;
  carda=this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return projectsFinished;
    })
    );
  cards =this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return projectsInit;      
    })
  );
  @Input() project: string;
  constructor(private breakpointObserver: BreakpointObserver,private router : Router,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem("role");
    this.projects=this.projectService.getProjects();
     this.projects.subscribe(data => {
       data.forEach((value,index,array)=>{
        projectsInit.push(value);
       });
      
     })
     //console.log(projectsInit)
    if(this.role=="Scrum Team"){
      projectsInit.splice(0,1);
    }

  }
  finish(index:number):void{
    projectsFinished.push(projectsInit[index]);
    projectsInit.splice(index,1);

  }
  delete(index:number):void{
    projectsInit.splice(index,1);
  }
}
