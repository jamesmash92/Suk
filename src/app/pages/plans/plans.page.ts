import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})

export class PlansPage {
  devotions: string;





  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.devotions = 'mydevotions';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlansPage');

  }

}

