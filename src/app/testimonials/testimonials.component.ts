import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import {AF} from '../providers/af';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.messages = this.afService.messages;
  }

  ngOnInit() {
  }

  sendMessage() {
    console.log('new message: ', this.newMessage);
    this.afService.sendMessage(this.newMessage);
  }


  // isYou(email) {
  //   if (email == this.afService.email) {
  //     return true;
  //   }
  //   else
  //     return false;
  // }
  // isMe (email) {
  //   if(email == this.afService.email)
  //     return false;
  //   else
  //     return true;
  // }

}
