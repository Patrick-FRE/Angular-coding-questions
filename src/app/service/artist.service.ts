import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, Subject} from 'rxjs';
import { Album} from '../model/Album';
import {GetAlbumsByArtistName} from '../model/getAlbumsbyArtistName';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
  requestOptions: HttpHeaders
 /*  artistAlbums:  Subject <Album[]> = new Subject <Album[]>()
  getResult: Subject <boolean> = new Subject <boolean>() */


    constructor(private http: HttpClient) {
      this.requestOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }

    getAlbums(artist: string): Observable<GetAlbumsByArtistName>{
     // this.getResult.next(true)
      return this.http.get<GetAlbumsByArtistName>(
        `https://itunes.apple.com/search?term=${artist}&entity=album`,
        {
          headers: this.requestOptions
        }
      )/* .subscribe(data => {
        this.artistAlbums.next(data.results)
        this.getResult.next(false)
      })  */
    }
}