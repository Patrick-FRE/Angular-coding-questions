import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Album } from '../interface/ItunesAPI.interface';
import { Media } from '../enum/ItunesAPI.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // artistName: string;
  artistInfo: Album[];
  collections: Album[] = [];
  searching = false;
  notFound = false;

  constructor(private artistService: ArtistService) { }

  private getAlbums() {
    const tracker = new Set();
    if (typeof this.artistInfo !== 'undefined') {
      this.artistInfo.forEach(ele => {
        if (!tracker.has(ele.collectionName)) {
          tracker.add(ele.collectionName);
          const album = {
            artworkUrl100: ele.artworkUrl100,
            collectionName: ele.collectionName,
            collectionViewUrl: ele.collectionViewUrl
          };
          this.collections.push(album);
        }
      });
    }
    // console.log(this.collections);
    if (this.collections.length === 0) {
      this.notFound = true;
      this.searching = false;
    }
  }

  getInfo(artistName: string) {
    // clean up search history
    this.artistInfo = [];
    this.collections = [];

    this.searching = true;
    this.notFound = false;

    this.artistService.getAlbumsByArtistName(artistName, Media.music).subscribe(
      res => {
        console.log(res);
        this.artistInfo = res.results;
        this.getAlbums();
      },
      error => console.log(error)
    );
  }

  // prevent refreshing page when hitting "Enter"
  onKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.getInfo(event.target.value);
    }
  }

  ngOnInit() { }
}
