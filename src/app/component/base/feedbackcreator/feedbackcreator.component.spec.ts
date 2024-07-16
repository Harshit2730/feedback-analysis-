import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcreatorComponent } from './feedbackcreator.component';

describe('FeedbackcreatorComponent', () => {
  let component: FeedbackcreatorComponent;
  let fixture: ComponentFixture<FeedbackcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackcreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
