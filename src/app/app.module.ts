import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './searchArtist/input-box/input-box.component';
import { ResultPageComponent } from './Albums-info/result-page/result-page.component';
import { HttpClientModule } from '@angular/common/http';
import { Sub20Pipe } from './pipe/sub20.pipe';
import { HomeComponent } from './home/home/home.component';
import { DetailedPageComponent } from './Albums-info/detailed-page/detailed-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    ResultPageComponent,
    Sub20Pipe,
    HomeComponent,
    DetailedPageComponent
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
