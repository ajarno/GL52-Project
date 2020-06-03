import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../core/services/project.service';
import { ProductBacklog } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-backlog',
  templateUrl: './project-backlog.component.html',
  styleUrls: ['./project-backlog.component.css']
})
export class ProjectBacklogComponent implements OnInit {
  id:number;
  backlog$:Observable<ProductBacklog>;

  constructor(private projectService:ProjectService) { }

  displayedColumns: string[] = ['item', 'priority', 'status'];
  dataSource
  
  ngOnInit(): void {
    this.id=Number(localStorage.getItem("id"))
    this.backlog$=this.projectService.getProductBacklog(this.id);
    this.backlog$.subscribe(data => {
      this.dataSource=data[0].tasks
      console.log(data[0])
      });
  }

}
