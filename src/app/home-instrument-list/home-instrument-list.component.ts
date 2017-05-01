import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-instrument-list',
  templateUrl: './home-instrument-list.component.html',
  styleUrls: ['./home-instrument-list.component.css']
})
export class HomeInstrumentListComponent implements OnInit {
  @Output()
  instrument: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(instrument: string) {
    this.instrument.emit(instrument);
  }

}
