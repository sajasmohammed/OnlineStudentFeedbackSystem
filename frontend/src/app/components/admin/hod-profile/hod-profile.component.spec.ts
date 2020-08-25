import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodProfileComponent } from './hod-profile.component';

describe('HodProfileComponent', () => {
  let component: HodProfileComponent;
  let fixture: ComponentFixture<HodProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
