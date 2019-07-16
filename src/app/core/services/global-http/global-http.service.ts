import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpRequestModel, HttpResponseModel } from '../../models/http.model';
import { HttpMethodTypeEnum } from '../../enums/http-method-type.enum';

@Injectable({
  providedIn: 'root',
})
export class GlobalHttpService {

  constructor(private httpClient: HttpClient) { }

  // http intercepter
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }

  // function to make a http call from various locations
  // NOTE: Syntax to call -> var httpResponseData = await doHttpRequest(httpRequestData);
  public async doHttpRequest(httpRequestData: HttpRequestModel): Promise<HttpResponseModel> {
    switch (httpRequestData.httpMethodTypeId) {
      case HttpMethodTypeEnum.get:
        return this.httpGetRequest(httpRequestData);
        break;
      case HttpMethodTypeEnum.post:
        return this.httpPostRequest(httpRequestData);
        break;
    }
  }

  // function to make http get request
  private async httpGetRequest(httpRequestData: HttpRequestModel): Promise<HttpResponseModel> {
    const httpResponseData = new HttpResponseModel();
    httpResponseData.isSuccess = false;
    httpResponseData.data = null;
    httpResponseData.isError = false;
    httpResponseData.error = null;

    return this.httpClient.get(httpRequestData.url).toPromise().then(data => {
      httpResponseData.isSuccess = true;
      httpResponseData.data = data;
      return httpResponseData;
    }, error => {
      httpResponseData.isError = true;
      httpResponseData.error = error;
      return httpResponseData;
    });
  }

  // function to make http post request
  private async httpPostRequest(httpRequestData: HttpRequestModel): Promise<HttpResponseModel> {
    const httpResponseData = new HttpResponseModel();
    httpResponseData.isSuccess = false;
    httpResponseData.data = null;
    httpResponseData.isError = false;
    httpResponseData.error = null;

    return this.httpClient.post(httpRequestData.url, httpRequestData.data).toPromise().then(data => {
      httpResponseData.isSuccess = true;
      httpResponseData.data = data;
      return httpResponseData;
    }, error => {
      httpResponseData.isError = true;
      httpResponseData.error = error;
      return httpResponseData;
    });
  }

}
