import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/itunesAPI.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  noResults = false;
  isFetching = false;
  window = window;

  constructor(private albumService: AlbumService) {
    this.albumService.albums.subscribe(data => {
      this.albums = data;
      console.log(this.albums);
    });
    this.albumService.isFetchingAlbums.subscribe(data => {
      this.isFetching = data;
    });
  }

  ngOnInit() {
  }
}
