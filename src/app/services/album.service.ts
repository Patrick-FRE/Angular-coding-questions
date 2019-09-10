import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject, BehaviorSubject } from 'rxjs'
import { itunesAPIResponse, Album } from '../interfaces/itunesAPI.interface'

export const initialValue = {
  albums: null,
  isFetchingAlbums: null
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  config: HttpHeaders
  albums = new BehaviorSubject<Album[]>(initialValue.albums)
  isFetchingAlbums = new BehaviorSubject<boolean>(initialValue.isFetchingAlbums) // isAlbumFetching

  constructor(private httpService: HttpClient) {
    this.config = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  }

  getAlbums(artist: string) {
    // Change this name to getAlbumsbyName()
    this.isFetchingAlbums.next(true)
    this.httpService
      .get<itunesAPIResponse>(
        `https://itunes.apple.com/search?term=${artist}&entity=album`,
        {
          headers: this.config
        }
      )
      .subscribe(data => {
        this.albums.next(data.results)
        this.isFetchingAlbums.next(false)
      })
  }
}
