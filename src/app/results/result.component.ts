import { Component, OnInit, Input} from '@angular/core';
import {Album} from '../model/album';
/* import { GetAlbumsByArtistName, Album} from '../model/album';
import { ArtistService } from '../service/artist.service'; */

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  // albums: Album[];
  @Input() albums: Album[];

  constructor() { }

  ngOnInit() { }

  /* showAlbums(artist: string) {
   this.showAlbumList.getAlbums(artist)
      .subscribe(data =>  {
        this.albumList = data;
        console.log(this.albumList);
       this.albums = this.albumList['results'];
      });

  } */
}
