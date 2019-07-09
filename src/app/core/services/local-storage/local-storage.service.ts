import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  //get item
  getItem(key: string): any {
    var item: any = JSON.parse(localStorage.getItem(key));
    item = typeof (item) != 'undefined' ? item : null;
    return item;
  }

  //set item
  setItem(key: string, value: any): void {
    value = typeof (value) != 'undefined' ? value : null;
    localStorage.setItem(key, JSON.stringify(value));
  }

  //remove item
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  //clear local storage
  clearLocalStorage() {
    localStorage.clear();
  }
}
