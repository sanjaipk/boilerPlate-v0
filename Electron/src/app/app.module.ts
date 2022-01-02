import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, SidebarComponent, HomeComponent, BookingsComponent, ConfigurationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
