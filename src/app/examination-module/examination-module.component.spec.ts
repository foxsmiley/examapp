import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationModuleComponent } from './examination-module.component';

describe('ExaminationModuleComponent', () => {
  let component: ExaminationModuleComponent;
  let fixture: ComponentFixture<ExaminationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
