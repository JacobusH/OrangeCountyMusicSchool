import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MailingList} from './mailing-list';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent implements OnInit {
  submitted = false;
  model = new MailingList('', '', '', '', '');

  @Input()
  emailAddress: string;


  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
  }


}
