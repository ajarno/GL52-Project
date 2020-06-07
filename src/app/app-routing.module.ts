import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoleAuthenticationComponent } from './pages/role-authentication/role-authentication.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/projects/new-project/new-project.component';
import { ProjectBacklogComponent } from './pages/projects/project-backlog/project-backlog.component';
import { SprintBacklogComponent } from './pages/sprintbacklog/board/sprintbacklog.component';
//import { SprintBacklogComponent } from './pages/sprintbacklog/board/sprintbacklog.component';
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
    data:{
      breadcrumb: 'Mes Projets'
    },
    children: [
      {
        path:'',
        component: ProjectsComponent,
      },
      {
        path: ':id/productbacklog',
        component: ProjectBacklogComponent,
      },
      {
        path: 'new',
        component: NewProjectComponent,
      },
      {
        path:':id/sprintbacklog',
        component: SprintBacklogComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
