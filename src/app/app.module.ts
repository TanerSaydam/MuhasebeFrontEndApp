import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { LayoutsModule } from './admin/layouts/layouts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [
    {provide:"apiUrl",useValue:"https://localhost:7146/api/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
