import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CouponsComponent } from './coupons/coupons.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CouponsComponent,
    NewsComponent,
    AboutComponent,
    HomeComponent,
    ViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
