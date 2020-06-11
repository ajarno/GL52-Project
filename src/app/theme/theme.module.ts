import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, LayoutModule, DragDropModule];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatCheckboxModule,
  MatChipsModule,
  MatSortModule,
  MatDialogModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatSelectModule
];

const COMPONENTS = [
  MenuComponent,
];

@NgModule({
  imports: [...BASE_MODULES, ...MAT_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...MAT_MODULES],
  declarations: [...COMPONENTS],
})
export class ThemeModule { }
