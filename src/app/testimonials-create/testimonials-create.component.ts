import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import {AF} from '../providers/af';

@Component({
  selector: 'app-testimonials-create',
  templateUrl: './testimonials-create.component.html',
  styleUrls: ['./testimonials-create.component.css']
})
export class TestimonialsCreateComponent implements OnInit {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.messages = this.afService.messages;
  }

  ngOnInit() {
  }


}
