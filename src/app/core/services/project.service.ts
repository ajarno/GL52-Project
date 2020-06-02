import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProductBacklog } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(`/api/projects`);
  }

  getProductBacklog(projectId: number): Observable<ProductBacklog> {
    return this.http.get<ProductBacklog>(`/api/productBacklog/${projectId}`);
  }
}
