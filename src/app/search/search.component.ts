import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../model/album';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerm: string;
 @Output() getAlbumsbyName = new EventEmitter<any>();

  constructor() {
  }


eventHandler() {
    this.getAlbumsbyName.emit(this.searchTerm);
  }


  ngOnInit() {
  }

}
