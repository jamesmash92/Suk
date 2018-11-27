import { Component } from '@angular/core';
import {  App, MenuController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-vision2023',
  templateUrl: './vision2023.page.html',
  styleUrls: ['./vision2023.page.scss'],
})

export class Vision2023Page {
  vision: string;

constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.vision = 'mission';
}

ionViewDidLoad() {
  console.log('ionViewDidLoad Vision2023Page');
}

}
