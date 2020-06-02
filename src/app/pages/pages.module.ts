import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { RoleAuthenticationComponent } from './role-authentication/role-authentication.component';
import { SprintBacklogComponent } from './sprintbacklog/board/sprintbacklog.component';
import { ListComponent } from './sprintbacklog/list/list.component';
import { CardComponent } from './sprintbacklog/card/card.component';
import { EditDialogComponent } from './sprintbacklog/edit-dialog/edit-dialog.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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

  ],
  entryComponents: [ EditDialogComponent ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR',},
  ]
})
export class PagesModule { }
