import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ngx-bootstrap';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FAQComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AnnouncementsComponent,
    MailingListComponent,
    GalleryComponent,
    TeachersComponent,
    FAQComponent,
    TestimonialsComponent,
    ResourcesComponent,
    ContactComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
