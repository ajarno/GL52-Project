import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  DashboardComponent,
  RoleAuthenticationComponent,
  ProjectsComponent,
  NewProjectComponent,
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
