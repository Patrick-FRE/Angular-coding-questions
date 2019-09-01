import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private jsonp: Jsonp) {

  }

  getAlbums() {
    return this.jsonp.get('https://itunes.apple.com/search?term=jack+johnson&entity=album').toPromise()
  }
}