import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-coding-questions';
  albums

  showAlbum(albums) {
    this.albums = albums
  }
}
