import { Component, OnInit } from '@angular/core'
import { AlbumService } from '../services/album.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string

  constructor(private albumService: AlbumService) {}

  onSearch() {
    this.albumService.getAlbums(this.searchTerm)
  }
}
