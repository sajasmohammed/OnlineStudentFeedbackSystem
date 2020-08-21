import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResponseResetComponent } from './student-response-reset.component';

describe('StudentResponseResetComponent', () => {
  let component: StudentResponseResetComponent;
  let fixture: ComponentFixture<StudentResponseResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResponseResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResponseResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
