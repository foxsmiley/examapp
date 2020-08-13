import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationHomeComponent } from './examination-home.component';

describe('ExaminationHomeComponent', () => {
  let component: ExaminationHomeComponent;
  let fixture: ComponentFixture<ExaminationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
