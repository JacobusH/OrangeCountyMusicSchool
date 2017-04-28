import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import {AF} from '../providers/af';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  public newAnnouncement: string;
  public announcements: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.announcements = this.afService.announcements;
  }

  ngOnInit() {
  }

  saveAnnouncement() {
    console.log('new announcement: ', this.newAnnouncement);
    this.afService.saveAnnouncement(this.newAnnouncement);
  }

}
