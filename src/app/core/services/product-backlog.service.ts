import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductBacklog } from 'src/app/shared/models/product-backlog.model';

const headers = new HttpHeaders().set(
  "Content-type",
  "application/json; charset=UTF-8"
);
@Injectable({
  providedIn: 'root'
})
export class ProductBacklogService {

  constructor(private http: HttpClient) {}

  getProductBacklog(projectId: number): Observable<ProductBacklog> {
    return this.http.get<ProductBacklog>(`/api/productBacklog?projectId=${projectId}`);
  }

  updateProductBacklog(productBacklog: ProductBacklog): Observable<{}> {
    return this.http.put(`/api/productBacklog/${productBacklog.getId()}`, JSON.stringify(productBacklog), { headers });
  }

  createProductBacklog(productBacklog: ProductBacklog): Observable<{}> {
    console.log(productBacklog);
    
    return this.http.post(`/api/productBacklog`, JSON.stringify(productBacklog), { headers });
  }

  deleteProductBacklog(productBacklogId: number): Observable<{}> {
    return this.http.delete(`/api/productBacklog/${productBacklogId}`, { headers });
  }
}
