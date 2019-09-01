import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
//import { Media, Entity } from "../enum/ItunesAPI.enum";
//import { GetAlbumsByArtistNameResponse } from "../interface/ItunesAPI.interface";

@Injectable({
  providedIn: "root"
})
export class ArtistService {
  requestOptions: HttpHeaders;

  constructor(private httpService: HttpClient) {
    this.requestOptions = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    });
  }

  getAlbums(artist: string): Observable<any> {
    return this.httpService.get<any>(
      `https://itunes.apple.com/search?term=${artist}&entity=${'album'}`,
      {
        headers: this.requestOptions
      }
    )
  }
}
