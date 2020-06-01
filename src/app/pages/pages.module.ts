import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { SprintBacklogComponent } from './sprintbacklog/board/sprintbacklog.component';
import { ListComponent } from './sprintbacklog/list/list.component';
import { CardComponent } from './sprintbacklog/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import { EditDialogComponent } from './sprintbacklog/edit-dialog/edit-dialog.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';


const COMPONENTS = [
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
    DragDropModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class PagesModule { }
