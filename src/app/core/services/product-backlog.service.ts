import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBacklog } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductBacklogService {

  constructor(private http: HttpClient) {}

  getProductBacklog(projectId: number): Observable<ProductBacklog> {
    return this.http.get<ProductBacklog>(`/api/productBacklog/${projectId}`);
  }
}
