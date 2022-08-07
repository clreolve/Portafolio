import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules material--------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

//------------------------------------------------------------------------------



//routes components
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { AngularhomeComponent } from './angularhome/angularhome.component';
import { Error404Component } from './error404/error404.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent,
    AngularhomeComponent,
    Error404Component,
    MainlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //modules material
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatTabsModule
    //----------------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
