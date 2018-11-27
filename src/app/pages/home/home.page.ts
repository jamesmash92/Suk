import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Profile } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HomeProvider } from '../../services/churchservice.service';
import { ProfilePage } from '../profile/profile.page';
import { DefaultPage } from '../default/default.page';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {VideosPage} from '../videos/videos.page';
import {Blog } from '../../../environments/environment';
import { MyBlogProvider } from '../../services/churchservice.service';
import { SermonProvider } from '../../services/churchservice.service';
import { Sermon } from '../../../environments/environment';
import { Events } from '../../../environments/environment';
import { MyEventsProvider } from '../../services/churchservice.service';
import { Announcements } from '../../../environments/environment';
import { MyAnnouncementsProvider } from '../../services/churchservice.service';
import { Verse } from '../../../environments/environment';
import { MyVerseProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

}
