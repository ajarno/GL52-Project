import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSprintComponent } from './close-sprint.component';

describe('CloseSprintComponent', () => {
  let component: CloseSprintComponent;
  let fixture: ComponentFixture<CloseSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
