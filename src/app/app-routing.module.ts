import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'add-mydevotios-to-database', loadChildren: './pages/add-mydevotios-to-database/add-mydevotios-to-database.module#AddMydevotiosToDatabasePageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'add-our-announcements', loadChildren: './pages/add-our-announcements/add-our-announcements.module#AddOurAnnouncementsPageModule' },
  { path: 'add-our-blog', loadChildren: './pages/add-our-blog/add-our-blog.module#AddOurBlogPageModule' },
  { path: 'add-our-events', loadChildren: './pages/add-our-events/add-our-events.module#AddOurEventsPageModule' },
  { path: 'add-verse-of-the-day', loadChildren: './pages/add-verse-of-the-day/add-verse-of-the-day.module#AddVerseOfTheDayPageModule' },
  { path: 'all-my-devotions', loadChildren: './pages/all-my-devotions/all-my-devotions.module#AllMyDevotionsPageModule' },
  { path: 'announcements', loadChildren: './pages/announcements/announcements.module#AnnouncementsPageModule' },
  { path: 'bible', loadChildren: './pages/bible/bible.module#BiblePageModule' },
  { path: 'biblestudy', loadChildren: './pages/biblestudy/biblestudy.module#BiblestudyPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'church-tabs', loadChildren: './pages/church-tabs/church-tabs.module#ChurchTabsPageModule' },
  { path: 'default', loadChildren: './pages/default/default.module#DefaultPageModule' },
  { path: 'edit-my-devotions', loadChildren: './pages/edit-my-devotions/edit-my-devotions.module#EditMyDevotionsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'edit-our-announcements', loadChildren: './pages/edit-our-announcements/edit-our-announcements.module#EditOurAnnouncementsPageModule' },
  { path: 'edit-our-blog', loadChildren: './pages/edit-our-blog/edit-our-blog.module#EditOurBlogPageModule' },
  { path: 'edit-our-events', loadChildren: './pages/edit-our-events/edit-our-events.module#EditOurEventsPageModule' },
  { path: 'edit-sermon', loadChildren: './pages/edit-sermon/edit-sermon.module#EditSermonPageModule' },
  { path: 'edit-verse-of-the-day', loadChildren: './pages/edit-verse-of-the-day/edit-verse-of-the-day.module#EditVerseOfTheDayPageModule' },
  { path: 'editdetails', loadChildren: './pages/editdetails/editdetails.module#EditdetailsPageModule' },
  { path: 'editprofile', loadChildren: './pages/editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
  { path: 'give', loadChildren: './pages/give/give.module#GivePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'list-of-our-announcements', loadChildren: './pages/list-of-our-announcements/list-of-our-announcements.module#ListOfOurAnnouncementsPageModule' },
  { path: 'list-of-our-blog', loadChildren: './pages/list-of-our-blog/list-of-our-blog.module#ListOfOurBlogPageModule' },
  { path: 'list-of-our-events', loadChildren: './pages/list-of-our-events/list-of-our-events.module#ListOfOurEventsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'list-of-sermons-in-settings', loadChildren: './pages/list-of-sermons-in-settings/list-of-sermons-in-settings.module#ListOfSermonsInSettingsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'list-of-the-verse-of-the-day', loadChildren: './pages/list-of-the-verse-of-the-day/list-of-the-verse-of-the-day.module#ListOfTheVerseOfTheDayPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'logtobe', loadChildren: './pages/logtobe/logtobe.module#LogtobePageModule' },
  { path: 'more', loadChildren: './pages/more/more.module#MorePageModule' },
  { path: 'opendevotion', loadChildren: './pages/opendevotion/opendevotion.module#OpendevotionPageModule' },
  { path: 'plans', loadChildren: './pages/plans/plans.module#PlansPageModule' },
  { path: 'post-sermon', loadChildren: './pages/post-sermon/post-sermon.module#PostSermonPageModule' },
  { path: 'prayer-wall', loadChildren: './pages/prayer-wall/prayer-wall.module#PrayerWallPageModule' },
  { path: 'prayeritem', loadChildren: './pages/prayeritem/prayeritem.module#PrayeritemPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'profiledetail', loadChildren: './pages/profiledetail/profiledetail.module#ProfiledetailPageModule' },
  { path: 'read', loadChildren: './pages/read/read.module#ReadPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'sermon', loadChildren: './pages/sermon/sermon.module#SermonPageModule' },
  { path: 'sermoncomments', loadChildren: './pages/sermoncomments/sermoncomments.module#SermoncommentsPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'verse-of-the-day', loadChildren: './pages/verse-of-the-day/verse-of-the-day.module#VerseOfTheDayPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'vision2023', loadChildren: './pages/vision2023/vision2023.module#Vision2023PageModule' },
  { path: 'youth-ministry', loadChildren: './pages/youth-ministry/youth-ministry.module#YouthMinistryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
