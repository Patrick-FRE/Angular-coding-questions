import { Component, OnInit, Input } from '@angular/core';
import { GetAlbumsByArtistName } from '../model/getAlbumsByArtistName';
import { ArtistService } from '../service/artist.service';
import { Album } from '../model/Album';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() albums: GetAlbumsByArtistName

  constructor(private artistService: ArtistService) { }
  
  ngOnInit() {
    
  }

}
