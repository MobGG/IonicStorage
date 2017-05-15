import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) { }

  save(name: string): Promise<any> {
    return this.storage.ready().then(() => this.storage.set('name',
      name
      // {
      //   'id': "id1",
      //   'name': name,
      //   'age': 23
      // }
    ));
  }

  load(): Promise<any> {
    return this.storage.ready().then(() => this.storage.get('name'));
  }
}
