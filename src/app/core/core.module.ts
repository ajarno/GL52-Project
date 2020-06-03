import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';




import { ProjectService } from './services/project.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

const SERVICES = [
  ProjectService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }

}

