import { Component, OnInit} from '@angular/core';
import { GetAlbumsByArtistName, Album} from '../model/album';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  albumList: GetAlbumsByArtistName[];
  albums: Album[];

  constructor(private showAlbumList: ArtistService) { }

  ngOnInit() { }

  showName(el: string) {
    console.log(el);
  }

  showAlbums(artist: string) {
   this.showAlbumList.getAlbums(artist)
      .subscribe(data =>  {
        this.albumList = data;
        console.log(this.albumList);
       this.albums = this.albumList['results'];
      });

  }
}
