import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodResponseResetComponent } from './hod-response-reset.component';

describe('HodResponseResetComponent', () => {
  let component: HodResponseResetComponent;
  let fixture: ComponentFixture<HodResponseResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodResponseResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodResponseResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
