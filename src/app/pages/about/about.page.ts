import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  mycalls: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mycalls = 'call';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}

