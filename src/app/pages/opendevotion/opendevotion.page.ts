import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-opendevotion',
  templateUrl: './opendevotion.page.html',
  styleUrls: ['./opendevotion.page.scss'],
})

export class OpendevotionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpendevotionPage');
  }

}
