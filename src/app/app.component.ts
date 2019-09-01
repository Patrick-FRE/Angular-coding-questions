import { Component } from '@angular/core';
import { AlbumService } from './models/album.model';

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
    this.albumService.getAlbums('linkinpark').subscribe(data => console.log(data))
  }
}
