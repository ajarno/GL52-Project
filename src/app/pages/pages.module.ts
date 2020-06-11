import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { RouterModule } from '@angular/router';
import { ProjectBacklogComponent } from './project-backlog/project-backlog.component';
import { SprintBacklogComponent } from './sprintbacklog/board/sprintbacklog.component';
import { EditDialogComponent } from './sprintbacklog/edit-dialog/edit-dialog.component';
import { NewSprintComponent } from './project-backlog/new-sprint/new-sprint.component';
import { NewStoryComponent } from './project-backlog/new-story/new-story.component';
import { CloseSprintComponent } from './sprintbacklog/close-sprint/close-sprint.component';

const COMPONENTS = [
  DashboardComponent,
  RoleAuthenticationComponent,
  ProjectsComponent,
  NewProjectComponent,
  ProjectBacklogComponent,
  DashboardComponent,
  RoleAuthenticationComponent,
  SprintBacklogComponent,
  EditDialogComponent,
  NewSprintComponent,
  NewStoryComponent,
  CloseSprintComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    RouterModule,
  ]
})
export class PagesModule { }
