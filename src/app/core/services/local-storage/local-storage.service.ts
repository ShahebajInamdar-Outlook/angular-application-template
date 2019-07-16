import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    let item: any = JSON.parse(localStorage.getItem(key));
    item = typeof (item) !== 'undefined' ? item : null;
    return item;
  }

  setItem(key: string, value: any): void {
    value = typeof (value) !== 'undefined' ? value : null;
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
