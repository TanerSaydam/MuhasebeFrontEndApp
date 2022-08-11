import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutsComponent,
    HeaderComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
