import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewNewComponent } from './project-preview-new.component';

describe('ProjectPreviewNewComponent', () => {
  let component: ProjectPreviewNewComponent;
  let fixture: ComponentFixture<ProjectPreviewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
