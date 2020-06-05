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
import { SprintBacklogComponent } from './sprintbacklog/board/sprintbacklog.component';
import { ListComponent } from './sprintbacklog/list/list.component';
import { CardComponent } from './sprintbacklog/card/card.component';
import { EditDialogComponent } from './sprintbacklog/edit-dialog/edit-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';

const COMPONENTS = [
  DashboardComponent,
  RoleAuthenticationComponent,
  ProjectsComponent,
  NewProjectComponent,
  ProjectBacklogComponent,
  DashboardComponent,
  RoleAuthenticationComponent,
  SprintBacklogComponent,
  ListComponent,
  CardComponent,
  EditDialogComponent
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
    CommonModule,
    SharedModule,
    ThemeModule,
    DragDropModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class PagesModule { }
