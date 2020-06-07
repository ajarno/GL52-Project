import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SprintBacklog } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class SprintBacklogService {
  
  constructor(private http: HttpClient) {}

  getSprintBacklog(projectId: number, storyId: number): Observable<SprintBacklog> {
    return this.http.get<SprintBacklog>(`/api/sprintBacklog/${projectId}/${storyId}`);
  }
}
