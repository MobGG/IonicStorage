import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  name: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
  }

  ionViewDidLoad() { }

  toAbout() {
    this.storage.save(this.name);
    console.log(this.name);
    this.navCtrl.push('AboutPage');
  }

}
