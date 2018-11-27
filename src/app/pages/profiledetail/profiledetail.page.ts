import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';

import {AngularFireAuth} from 'angularfire2/auth';

import { Profile } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HomeProvider } from '../../services/churchservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.page.html',
  styleUrls: ['./profiledetail.page.scss'],
})

export class ProfiledetailPage {

  profileData: Observable<Profile[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private profile: HomeProvider,
              private afauth: AngularFireAuth) {

                {

      this.profileData = this.profile
      .getProfile()
      .snapshotChanges()
      .pipe(map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
          }));
        }
      ));

  }
  }

  ionViewWillLoad() {
    this.afauth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

      this.toast.create({
        message: `Welcome to Church App, ${data.email}`,
        duration: 1000,
      }).catch();
    } else {
      this.toast.create({
        message: `could not find authentication details`,
        duration: 1000,
      }).catch();
    }

    });
  }

}
