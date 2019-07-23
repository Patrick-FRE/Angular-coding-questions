import { Component, OnInit } from '@angular/core';
import { GetObsFromApiService } from '../service/get-obs-from-api.service';
import { AllResult } from '../model/all-result';
import { Result } from '../model/result';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.scss']
})
export class ShowAlbumComponent implements OnInit {
  constructor(private showAlbumName: GetObsFromApiService) {
  }

  allInfo: AllResult[];
  artistInfo: Result[];

  ngOnInit() {
  }

  showAlbum(artist: string) {
    this.showAlbumName.getAllAlbum(artist).subscribe(data => {
    this.allInfo = data;
    console.log(this.allInfo);
    this.artistInfo = this.allInfo['results'];
    });
  }
}
