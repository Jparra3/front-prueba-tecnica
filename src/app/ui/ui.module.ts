import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class UiModule { }
