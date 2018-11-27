import {Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Announcements} from '../../../environments/environment';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import {ListOfOurAnnouncementsPage } from '../list-of-our-announcements/list-of-our-announcements.page';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { directiveInject } from '@angular/core/src/render3';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-our-announcements',
  templateUrl: './add-our-announcements.page.html',
  styleUrls: ['./add-our-announcements.page.scss'],
})
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-ion-textarea[autosize]' // Attribute selector,
})
export class AddOurAnnouncementsPageDirective {

    constructor(
      private afauth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController,
      public navParams: NavParams,
      public element: ElementRef) {
    }

   announcements = {} as Announcements;

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler() {
    this.adjust();
  }

  AfterViewInit() {
      this.adjust();
    }

    adjust(): void {
      const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
      textArea.style.overflow = 'hidden';
      textArea.style.height = 'auto';
      textArea.style.height = (textArea.scrollHeight + 42) + 'px';
    }



        createAnnouncements() {
            this.afauth.authState.pipe(take(1)).subscribe(() => {
              this.afDatabase.list(`announcements`).push(this.announcements)
                .then(() => this.navCtrl.navigateForward('ListOfOurAnnouncementsPage'));
            });
        }

  }
