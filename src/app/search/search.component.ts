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
artistInfo: Album[];
 @Output() getAlbumsbyName = new EventEmitter<Album[]>();

  constructor(private artistService: ArtistService) { 
    this.artistService.getAlbums('')
  }


eventHandler() {
    this.artistService.getAlbums(this.searchTerm);
  }


  ngOnInit() {
  }

}
