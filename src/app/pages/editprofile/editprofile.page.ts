import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { HomeProvider } from '../../services/churchservice.service';
import { Profile } from '../../../environments/environment';
import { ToastProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})

export class EditprofilePage {

  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private homeedit: HomeProvider,
    private toast: ToastProvider) {
  }

  ionViewWillLoad() {
  this.profile = this.navParams.get('profile');
}
  SaveProfile(profile: Profile) {

    this.homeedit.editProfile(profile).then(() => {
      this.toast.show(`${profile.username} saved!`);
      this.navCtrl.setRoot('ProfiledetailPage');
    });

  }

  removeProfile(profile: Profile) {

    this.homeedit.removeProfile(profile).then(() => {
      this.toast.show(`${profile.username} deleted!`);
      this.navCtrl.setRoot('ProfiledetailPage');
    });

  }

}
