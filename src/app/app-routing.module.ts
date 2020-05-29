import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleAuthenticationComponent } from './pages/role-authentication/role-authentication.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BacklogComponent } from './pages/projects/backlog/backlog.component';

const routes: Routes = [
  {
    path: "authentication",
    component: RoleAuthenticationComponent
  },
  {
    path: "",
    component: DashboardComponent
  },
  {
     path: 'projects',
     component: ProjectsComponent,
  },
  {
    path: 'projects/backlog',
    component: BacklogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
