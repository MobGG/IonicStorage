import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
  }

  ionViewDidLoad() {
    this.storage.load().then((val: string) => {
      this.name = val;
      console.log('name:', val);
    })
  }

}
