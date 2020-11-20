import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlights/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
