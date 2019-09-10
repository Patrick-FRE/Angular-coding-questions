import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetAlbumsByArtistName } from '../model/album';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

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

  getAlbums(artist: string): Observable<GetAlbumsByArtistName[]> {
     return this.http.get(
      `https://itunes.apple.com/search?term=${artist}&entity=album`,
      {
        headers: this.requestOptions
      }
    ).pipe(map(response => response as GetAlbumsByArtistName[]), catchError(error => throwError(error)));
  }
}
