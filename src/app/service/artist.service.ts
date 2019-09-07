import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, Subject} from 'rxjs';
import { Album} from '../model/Album';
import {GetAlbumsByArtistName} from '../model/album';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
  requestOptions: HttpHeaders;


    constructor(private http: HttpClient) {
      this.requestOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }

    getAlbums(artist: string): Observable<GetAlbumsByArtistName> {
    return this.http.get<GetAlbumsByArtistName>(
    `https://itunes.apple.com/search?term=${artist}&entity=album`,
        {
          headers: this.requestOptions
        }
      );
    }

}
