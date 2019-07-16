import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from '../../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  public configData: ConfigModel;

  constructor(public httpClient: HttpClient) { }

  load() {
    return new Promise((resolve, reject) => {
      this.httpClient.get('config.json')
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
