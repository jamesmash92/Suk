import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import {Profile} from '../../../environments/environment';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import { take } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage {

  profile = {} as Profile;

   constructor( private afauth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
   }

   createprofile() {
     this.afauth.authState.pipe(take(1)).subscribe(auth => {
       this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
       .then(() => this.navCtrl.push('ProfiledetailPage'));
     });

   }

 }
