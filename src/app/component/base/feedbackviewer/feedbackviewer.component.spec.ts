import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackviewerComponent } from './feedbackviewer.component';

describe('FeedbackviewerComponent', () => {
  let component: FeedbackviewerComponent;
  let fixture: ComponentFixture<FeedbackviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
