import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Profile } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HomeProvider } from '../../services/churchservice.service';
import { ProfilePage } from '../profile/profile.page';
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
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage {

  [x: string]: any;
  public category = 'movies';
  public categories: Array<string> = ['movies', 'tvshows', 'animated'];

  profileData: Observable<Profile[]>;
  eventsDataList: Observable<Events[]>;
  blogDataList: Observable<Blog[]>;
  verseDataList: Observable<Verse[]>;
  sermonData: Observable<Sermon[]>;
  announcementsDataList: Observable<Announcements[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private toast: ToastController,
              private profile: HomeProvider,
              private sermon: SermonProvider,
              private blogprovider: MyBlogProvider,
              private eventsprovider: MyEventsProvider,
              private verseprovider: MyVerseProvider,
              private announcementsprovider: MyAnnouncementsProvider,
              private afDatabase: AngularFireDatabase,
              public modalCtrl: ModalController,
              private youtube: YoutubeVideoPlayer,
            public http: Http) {

          {
            this.profileData = this.profile
            .getProfile()
            .snapshotChanges()
            .pipe(map(
              changes => {
                return changes.map(c => ({
                  key: c.payload.key, ...c.payload.val(),
                }));
              }
            ));

        }
          {
            this.blogDataList = this.blogprovider
            .getBlog()
            .snapshotChanges()
            .pipe(map(
              changes => {
                return changes.map(c => ({
                  key: c.payload.key, ...c.payload.val(),
                }));
              }
            ));
          }
            {
                this.sermonData = this.sermon
                .getSermon()
                .snapshotChanges()
                .pipe(map(
                  changes => {
                    return changes.map(c => ({
                      key: c.payload.key, ...c.payload.val(),
                    }));
                  }
                ));
            }

          {
            this.eventsDataList = this.eventsprovider
            .getEvents()
            .snapshotChanges()
            .pipe(map(
              changes => {
                return changes.map(c => ({
                  key: c.payload.key, ...c.payload.val(),
                }));
              }
            ));
        }
            {
                this.announcementsDataList = this.announcementsprovider
                .getAnnouncements()
                .snapshotChanges()
                .pipe(map(
                  changes => {
                    return changes.map(c => ({
                      key: c.payload.key, ...c.payload.val(),
                    }));
                  }
                ));
          }
          {
              this.verseDataList = this.verseprovider
              .getVerse()
              .snapshotChanges()
              .pipe(map(
                changes => {
                  return changes.map(c => ({
                    key: c.payload.key, ...c.payload.val(),
                  }));
                }
              ));
        }
          this.icons = 'home';

      }

      onTabChanged(tabName) {
         this.category = tabName;
       }



  ionViewWillLoad() {

      this.afauth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

      this.toast.create({
        message: `Welcome to Church App, ${data.email}`,
        duration: 3000,
      }).catch();
    } else {
      this.toast.create({
        message: `could not find authentication details`,
        duration: 3000,
      }).catch();
    }

    });
  }

  editprofile() {
    this.navCtrl.navigateForward('ProfilePage');
  }

  gotovideopage() {
    this.navCtrl.navigateForward('VideosPage');
  }


}
