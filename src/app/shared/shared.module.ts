import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleChoiceComponent } from './components/role-choice/role-choice.component';
import { ThemeModule } from '../theme/theme.module';

const COMPONENTS = [
  RoleChoiceComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ]
})
export class SharedModule { }
