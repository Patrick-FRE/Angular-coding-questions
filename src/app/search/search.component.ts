import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerm: string;
 @Output() getAlbumsbyName = new EventEmitter<string>();

  constructor() {
  }


eventHandler() {
    this.getAlbumsbyName.emit(this.searchTerm);
  }


  ngOnInit() {
  }

}
