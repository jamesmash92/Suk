import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-prayer-wall',
  templateUrl: './prayer-wall.page.html',
  styleUrls: ['./prayer-wall.page.scss'],
})

export class PrayerWallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerWallPage');
  }

}
