import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from 'src/app/shared/models/project.model';

const headers = new HttpHeaders().set(
  "Content-type",
  "application/json; charset=UTF-8"
);
@Injectable({
  providedIn: "root",
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  getProject(projectId: number): Observable<Project> {
    return this.http.get<Project>(`/api/projects/${projectId}`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`/api/projects`);
  }

  createProject(project: Project): Observable<{}> {
    return this.http.post(`/api/projects`, project, { headers });
  }

  deleteProject(projectId: number): Observable<{}> {
    return this.http.delete(`/api/projects/${projectId}`, { headers });
  }

  updateProject(project: Project): Observable<{}> {
    return this.http.put(`/api/projects/${project["id"]}`, project, {
      headers,
    });
  }
}
