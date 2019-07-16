import { Component, OnInit } from '@angular/core';
import { SearchJsonService } from 'src/app/SearchJSON/search-json.service';
import { SearchLogicService } from 'src/app/APIService/search-logic.service';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.less']
})
export class SearchAlbumComponent implements OnInit {
  postList: SearchJsonService[];
  artistName = "";
  constructor(private postService: SearchLogicService) { }

  getName(name:string){
    this.artistName = name;
    if(this.artistName !== ""){
      this.postService.getAllAlbums(this.artistName).subscribe(data=>{
        this.postList=data; 
      });
    }
  }

  ngOnInit() {

  }

}
