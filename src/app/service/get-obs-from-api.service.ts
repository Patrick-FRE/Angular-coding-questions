import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AllResult } from '../model/all-result';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetObsFromApiService {

  constructor(private http: HttpClient) { }

  getAllAlbum(artistUrl: string): Observable<AllResult[]> {
    // this.http.get('https://itunes.apple.com/search?term=' + artistUrl + '&entity=album').subscribe(data => { console.log(data); } );
    // console.log(this.http.get('https://itunes.apple.com/search?term=jason&entity=album'));
    return this.http.get('https://itunes.apple.com/search?term=' + artistUrl + '&entity=album')
    .pipe(map(response => response as AllResult[]), catchError(error => throwError(error)));

  }
}
