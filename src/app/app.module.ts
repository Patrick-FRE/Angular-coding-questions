import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { HttpClientModule } from '@angular/common/http';
// import { PostsService } from './posts.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowAlbumComponent
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
