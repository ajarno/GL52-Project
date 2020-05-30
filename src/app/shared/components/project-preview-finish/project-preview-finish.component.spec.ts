import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewFinishComponent } from './project-preview-finish.component';

describe('ProjectPreviewFinishComponent', () => {
  let component: ProjectPreviewFinishComponent;
  let fixture: ComponentFixture<ProjectPreviewFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
