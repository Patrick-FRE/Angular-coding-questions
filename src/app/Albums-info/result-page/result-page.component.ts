import { Injectable, Component, OnInit } from '@angular/core';
import { GetJsonService } from 'src/app/service/get-json.service';
import { OriginData } from 'src/app/model/origin-data';
import { AlbumResult } from 'src/app/model/album-result';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  constructor(private getJsonService: GetJsonService) { }
  result: OriginData[];
  albumInfo: AlbumResult[];

  ngOnInit() {
  }
  searchAlbums(artistName: string) {
    this.getJsonService.getAllAlbums(artistName).subscribe(data => {this.result = data; console.log(this.result);
      this.albumInfo = this.result['results']; console.log(this.albumInfo); });
  }
}
