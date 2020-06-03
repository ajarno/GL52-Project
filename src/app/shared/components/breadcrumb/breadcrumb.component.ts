import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe(()=> this.items=this.createBreadcrumbs(this.activatedRoute.root));
    // this.items = [
    //   {label: 'Mes Projets'},
    //   {label: 'Projet'}
    // ]
    // this.home = {icon: 'pi pi-home'};
  }
  
//  private createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: MenuItem[] = []): MenuItem[] {
//   const children: ActivatedRoute[] = route.children;

//   if (children.length === 0) {
//     return breadcrumbs;
//   }

//   for (const child of children) {
//     const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
//     if (routeURL !== '') {
//       url += `/${routeURL}`;
//     }

//     const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
//     if (!isNullOrUndefined(label)) {
//       breadcrumbs.push({label, url});
//     }

//     return this.createBreadcrumbs(child, url, breadcrumbs);
//   }
// }

}
