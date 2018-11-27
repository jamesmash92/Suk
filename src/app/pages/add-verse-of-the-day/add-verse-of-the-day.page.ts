import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Verse} from '../../../environments/environment';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import {ListOfTheVerseOfTheDayPage } from '../list-of-the-verse-of-the-day/list-of-the-verse-of-the-day.page';
import { Directive, HostListener, ElementRef } from '@angular/core';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-verse-of-the-day',
  templateUrl: './add-verse-of-the-day.page.html',
  styleUrls: ['./add-verse-of-the-day.page.scss'],
})


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-textarea[autosize]' // Attribute selector,
})
export class AddVerseOfTheDayPageDirective {

    constructor(
      private afauth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController,
      public navParams: NavParams,
      public element: ElementRef) {
    }

   verse = {} as Verse;

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
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



        createVerse() {
            this.afauth.authState.pipe(take(1)).subscribe(auth => {
            this.afDatabase.list(`verse`).push(this.verse)
            .then(() => this.navCtrl.navigateForward('ListOfTheVerseOfTheDayPage'));
          });
        }
      }
