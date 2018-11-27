import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-prayeritem',
  templateUrl: './prayeritem.page.html',
  styleUrls: ['./prayeritem.page.scss'],
})

export class PrayeritemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayeritemPage');
  }

}
