import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../interfaces/itunesAPI.interface'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[]
  noResults: boolean = false
  isFetching: boolean = false
  window = window

  constructor(private albumService: AlbumService) { 
    this.albumService.albums.subscribe(data => {
      if(data.length === 0) {
        this.noResults = true
      } else {
        this.albums = data
        this.noResults = false
      }
      console.log(data)
    })
    this.albumService.isFetching.subscribe(data => {
      this.isFetching = data
      console.log(this.isFetching)
    })
  }

  ngOnInit() {
  }
}
