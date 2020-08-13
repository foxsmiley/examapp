import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationRecordComponent } from './examination-record.component';

describe('ExaminationRecordComponent', () => {
  let component: ExaminationRecordComponent;
  let fixture: ComponentFixture<ExaminationRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
