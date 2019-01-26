import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertyComponent } from './input-property.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputPropertyComponent],
  exports: [InputPropertyComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InputPropertyModule { }
