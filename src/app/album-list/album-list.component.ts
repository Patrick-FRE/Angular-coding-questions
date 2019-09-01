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

  constructor(private albumService: AlbumService) { 
    this.albumService.albums.subscribe(data => {
      this.albums = data
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
