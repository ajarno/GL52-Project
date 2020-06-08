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
    return this.http.get<SprintBacklog[]>(`/api/sprintBacklog?projectId=${projectId}&storyId=${storyId}`);
  }

  updateSprintBacklog(sprintBacklog: SprintBacklog): Observable<{}> {
    return this.http.put(`/api/sprintBacklog/${sprintBacklog.getSprintId()}`, JSON.stringify(sprintBacklog), { headers });
  }
}
