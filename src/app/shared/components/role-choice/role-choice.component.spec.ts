import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChoiceComponent } from './role-choice.component';

describe('RoleChoiceComponent', () => {
  let component: RoleChoiceComponent;
  let fixture: ComponentFixture<RoleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
