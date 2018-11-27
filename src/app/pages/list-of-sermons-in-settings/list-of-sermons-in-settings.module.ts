import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfSermonsInSettingsPage } from './list-of-sermons-in-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfSermonsInSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfSermonsInSettingsPage]
})
export class ListOfSermonsInSettingsPageModule {}
