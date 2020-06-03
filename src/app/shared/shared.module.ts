import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleChoiceComponent } from './components/role-choice/role-choice.component';
import { ThemeModule } from '../theme/theme.module';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { RouterModule } from '@angular/router';
import { ProjectPreviewFinishComponent } from './components/project-preview-finish/project-preview-finish.component';

const COMPONENTS = [
  RoleChoiceComponent,
  ProjectPreviewComponent,
  ProjectPreviewFinishComponent
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
    RouterModule
  ]
})
export class SharedModule { }
