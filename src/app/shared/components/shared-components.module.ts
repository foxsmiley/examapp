import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FieldErrorDisplayComponent,
    SpinnerComponent
  ],
  exports: [
    FieldErrorDisplayComponent,
    SpinnerComponent
  ]
})
export class SharedComponentsModule { }
