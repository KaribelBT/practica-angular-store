import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlights/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ExponentialPipe
  ],
})
export class SharedModule { }
