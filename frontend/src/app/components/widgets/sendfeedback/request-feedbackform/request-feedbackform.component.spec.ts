import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFeedbackformComponent } from './request-feedbackform.component';

describe('RequestFeedbackformComponent', () => {
  let component: RequestFeedbackformComponent;
  let fixture: ComponentFixture<RequestFeedbackformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFeedbackformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFeedbackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
