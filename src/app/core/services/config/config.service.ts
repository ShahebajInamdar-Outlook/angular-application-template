import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from '../../models/config.model';

@Injectable()
export class ConfigService {

  //public properties
  public configData: ConfigModel;

  constructor(public _httpClient: HttpClient) { }

  load() {
    return new Promise((resolve, reject) => {
      this._httpClient.get('config.json')
        .subscribe((data) => {
          this.configData = data;
          resolve(true);
        },
          (error: any) => {
            console.error(error);
          });
    });
  }
}