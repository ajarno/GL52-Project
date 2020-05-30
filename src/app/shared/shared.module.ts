import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleChoiceComponent } from './components/role-choice/role-choice.component';
import { ThemeModule } from '../theme/theme.module';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { RouterModule } from '@angular/router';
import { ProjectPreviewNewComponent } from './components/project-preview-new/project-preview-new.component';
import { ProjectPreviewFinishComponent } from './components/project-preview-finish/project-preview-finish.component';

const COMPONENTS = [
  RoleChoiceComponent,
  ProjectPreviewComponent,
  ProjectPreviewNewComponent,
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
