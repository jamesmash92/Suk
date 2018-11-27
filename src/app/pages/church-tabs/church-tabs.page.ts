import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-church-tabs',
  templateUrl: './church-tabs.page.html',
  styleUrls: ['./church-tabs.page.scss'],
})
export class ChurchTabsPage {

  homeRoot = 'DefaultPage';
  readRoot = 'ReadPage';
  plansRoot = 'PlansPage';
  settingRoot = 'SettingPage';
  moreRoot = 'MorePage';



  constructor(public navCtrl: NavController) {}
}
