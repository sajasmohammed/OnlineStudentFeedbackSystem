import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodPasswordComponent } from './hod-password.component';

describe('HodPasswordComponent', () => {
  let component: HodPasswordComponent;
  let fixture: ComponentFixture<HodPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
