import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    HomeModule
  ],
  exports:[
    LayoutsModule,
    HomeModule
  ]
})
export class AdminModule { }
