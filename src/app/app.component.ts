import { Component } from '@angular/core';
import { GetAlbumsByArtistName, Album } from './model/album';
import { ArtistService } from './service/artist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-coding-questions';
  albumList: GetAlbumsByArtistName[];
  list: Album[];
  constructor(private showAlbumList: ArtistService) {}

  showName(el: string) {
    this.showAlbums(el);
  }
  showAlbums(artist: string) {
    this.showAlbumList.getAlbums(artist).subscribe(data => {
      this.albumList = data;
      console.log(this.albumList);
      this.list = this.albumList['results'];
    });
  }
}
