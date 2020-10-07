import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseFeedbackformComponent } from './response-feedbackform.component';

describe('ResponseFeedbackformComponent', () => {
  let component: ResponseFeedbackformComponent;
  let fixture: ComponentFixture<ResponseFeedbackformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseFeedbackformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseFeedbackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
