import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@Component({
  selector: 'app-give',
  templateUrl: './give.page.html',
  styleUrls: ['./give.page.scss'],
})
export class GivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private payPal: PayPal) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GivePage');
  }

}
