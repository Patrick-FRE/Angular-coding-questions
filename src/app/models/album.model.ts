import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlbumService {
  constructor(private httpService: HttpClient) {

  }

  getAlbums() {
    return this.httpService.get('https://itunes.apple.com/search?term=jack+johnson&entity=album') 
  }
}