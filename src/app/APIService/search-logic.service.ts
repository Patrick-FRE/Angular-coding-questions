import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SearchJsonService } from '../SearchJSONData/search-json.service';

@Injectable({
  providedIn: 'root'
})
export class SearchLogicService {

  constructor(private httpClient: HttpClient) { }

  getAllAlbums(artistName: String): Observable<SearchJsonService[]> {
    return this.httpClient
      .get('https://itunes.apple.com/search?entity=album&attribute=allArtistTerm&limit=100&term=${' + artistName + '}')
      .pipe(map(response => response['results'].sort(this.sortByName) as SearchJsonService[]), catchError(error => throwError(error)));
  }
  sortByName(a, b): number {
    if (a.artistName < b.artistName) {
      return -1;
    }
    if (a.artistName > b.artistName) {
      return 1;
    }
    return 0;

  }

}
