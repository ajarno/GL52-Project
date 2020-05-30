import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleAuthenticationComponent } from './pages/role-authentication/role-authentication.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/projects/new-project/new-project.component';
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
    path: 'projects/new',
    component: NewProjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
