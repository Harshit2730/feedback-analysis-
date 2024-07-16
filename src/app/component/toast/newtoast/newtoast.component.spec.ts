import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtoastComponent } from './newtoast.component';

describe('NewtoastComponent', () => {
  let component: NewtoastComponent;
  let fixture: ComponentFixture<NewtoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtoastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
