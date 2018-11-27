import { Component } from '@angular/core';
import {NavController, NavParams } from '@ionic/angular';
import {Sermon} from '../../../environments/environment';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import { Directive, HostListener, ElementRef } from '@angular/core';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-post-sermon',
  templateUrl: './post-sermon.page.html',
  styleUrls: ['./post-sermon.page.scss'],
})

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-textarea[autosize]' // Attribute selector,
})
export class PostSermonPageDirective {

    constructor(
      private afauth: AngularFireAuth,
      private afDatabase: AngularFireDatabase,
      public navCtrl: NavController,
      public navParams: NavParams,
      public element: ElementRef) {
    }



   sermon = {} as Sermon;

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



        createsermon() {
            this.afauth.authState.pipe(take(1)).subscribe(auth => {
            this.afDatabase.list(`sermon`).push(this.sermon)
            .then(() => this.navCtrl.push('ListOfSermonsInSettingsPage'));
          });
        }

  }
