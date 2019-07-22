import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  constructor() { }
  @Output() sendName = new EventEmitter<string>();
  ngOnInit() {
  }
  onChange(inputName: string) {
    this.sendName.emit(inputName);
  }

  onSubmit(inputName: string) {
    this.sendName.emit(inputName);
  }
  
}
