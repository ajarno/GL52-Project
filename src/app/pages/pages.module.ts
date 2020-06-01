import { NgModule, LOCALE_ID } from '@angular/core';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatSelectModule} from '@angular/material/select';
registerLocaleData(localeFr);

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
    MatTooltipModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  entryComponents: [ EditDialogComponent ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR',},
  ]
})
export class PagesModule { }
