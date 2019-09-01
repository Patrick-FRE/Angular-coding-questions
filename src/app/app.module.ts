import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { LargerImagePipe } from './pipes/larger-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumListComponent,
    AlbumItemComponent,
    LargerImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
