import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSignUpComponent } from './hr-sign-up.component';

describe('HrSignUpComponent', () => {
  let component: HrSignUpComponent;
  let fixture: ComponentFixture<HrSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
