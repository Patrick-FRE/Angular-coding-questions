import { Component } from '@angular/core';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-coding-questions'

  constructor(private albumService: AlbumService) {

  }

  getAlbums() {
    this.albumService.getAlbums().then(data => console.log(data))
  }
}
