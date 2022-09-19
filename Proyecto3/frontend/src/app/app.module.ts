import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { CarditemComponent } from './templates/carditem/carditem.component';
import { ProductshowComponent } from './templates/productshow/productshow.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    LayoutComponent,
    CarditemComponent,
    ProductshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
