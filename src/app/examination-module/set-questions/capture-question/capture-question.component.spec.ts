import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureQuestionComponent } from './capture-question.component';

describe('CaptureQuestionComponent', () => {
  let component: CaptureQuestionComponent;
  let fixture: ComponentFixture<CaptureQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
