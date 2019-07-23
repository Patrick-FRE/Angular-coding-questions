import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowAlbumComponent } from '../show-album/show-album.component';
import { Result } from '../model/result';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private result: ShowAlbumComponent) { }
  albumsInfo: Result[];
  @Output() getAlbumsbyName = new EventEmitter<string>();
  // name: string;
  ngOnInit() {
    // this.name = 'Hannah';
    // this.showArtist();
  }

  // changeBackgroundColor(number: number) {
  //   if (number === 1) {
  //     this.name = 'Mia';
  //   } else if (number === 2) {
  //     this.name = 'Chen';
  //   }
  // }
  showArtist(artist: string) {
    this.getAlbumsbyName.emit(artist);
  }
}
