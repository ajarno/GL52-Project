import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SprintBacklog } from 'src/app/shared/models';

const headers = new HttpHeaders().set(
  "Content-type",
  "application/json; charset=UTF-8"
);
@Injectable({
  providedIn: 'root'
})
export class SprintBacklogService {
  
  constructor(private http: HttpClient) {}

  getSprintBacklog(projectId: number, storyId: number): Observable<SprintBacklog[]> {
    return this.http.get<SprintBacklog[]>(`/api/sprintBacklog/${projectId}/${storyId}`);
  }

  updateSprintBacklog(projectId: number, storyId: number, sprintBacklog: SprintBacklog): Observable<{}> {
    return this.http.post(`/api/sprintBacklog/${projectId}/${storyId}`, sprintBacklog, { headers });
  }
}
