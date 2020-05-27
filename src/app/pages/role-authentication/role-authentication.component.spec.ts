import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAuthenticationComponent } from './role-authentication.component';

describe('RoleAuthenticationComponent', () => {
  let component: RoleAuthenticationComponent;
  let fixture: ComponentFixture<RoleAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
