import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodRequestResetComponent } from './hod-request-reset.component';

describe('HodRequestResetComponent', () => {
  let component: HodRequestResetComponent;
  let fixture: ComponentFixture<HodRequestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodRequestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodRequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
