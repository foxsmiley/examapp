import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureExamComponent } from './capture-exam.component';

describe('CaptureExamComponent', () => {
  let component: CaptureExamComponent;
  let fixture: ComponentFixture<CaptureExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
