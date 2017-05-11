import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) { }

  save(name: string) {
    this.storage.ready().then(() => {
      this.storage.set('name', name);
    });
  }

  load(): Promise<any> {
    return this.storage.ready().then(() => this.storage.get('name'));
  }
}
