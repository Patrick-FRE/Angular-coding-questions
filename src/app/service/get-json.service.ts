import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { OriginData } from '../model/origin-data';
import { map, catchError, debounceTime } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: no-unused-expression
  getAllAlbums(name: string): Observable<OriginData[]> {
    return this.httpClient.get('https://itunes.apple.com/search?term=' + name + '&entity=album')
    .pipe(map(response => response as OriginData[], debounceTime(500)), catchError(error => throwError(error)));
  }
}
