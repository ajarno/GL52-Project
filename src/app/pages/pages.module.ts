import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { RouterModule } from '@angular/router';
import { ProjectBacklogComponent } from './projects/project-backlog/project-backlog.component';


const COMPONENTS = [
  DashboardComponent,
  RoleAuthenticationComponent,
  ProjectsComponent,
  NewProjectComponent,
  ProjectBacklogComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    RouterModule
  ]
})
export class PagesModule { }
