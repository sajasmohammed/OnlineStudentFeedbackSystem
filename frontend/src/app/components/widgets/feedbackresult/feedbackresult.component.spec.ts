import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackresultComponent } from './feedbackresult.component';

describe('FeedbackresultComponent', () => {
  let component: FeedbackresultComponent;
  let fixture: ComponentFixture<FeedbackresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
