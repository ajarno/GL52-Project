import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { ProjectsComponent } from './projects/projects.component';
import { BacklogComponent } from './projects/backlog/backlog.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';

const COMPONENTS = [
  DashboardComponent,
  RoleAuthenticationComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ProjectsComponent,
    BacklogComponent,
    NewProjectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
  ]
})
export class PagesModule { }
