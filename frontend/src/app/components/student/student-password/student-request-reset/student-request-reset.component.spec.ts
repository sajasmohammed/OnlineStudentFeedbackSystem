import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequestResetComponent } from './student-request-reset.component';

describe('StudentRequestResetComponent', () => {
  let component: StudentRequestResetComponent;
  let fixture: ComponentFixture<StudentRequestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRequestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
