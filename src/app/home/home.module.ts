import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BannerComponent } from '../banner/banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
