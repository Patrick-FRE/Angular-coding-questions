import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media, Entity } from '../enum/ItunesAPI.enum';
import { GetAlbumsByArtistNameResponse } from '../interface/ItunesAPI.interface';

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

  getAlbumsByArtistName(
    artist: string,
    media: Media,
    entity = Entity.album
  ): Observable<GetAlbumsByArtistNameResponse> {
    return this.http.get<GetAlbumsByArtistNameResponse>(
      `https://itunes.apple.com/search?term=${artist}&entity=${entity}&media=${media}`,
      {
        headers: this.requestOptions
      }
    );
  }
}
