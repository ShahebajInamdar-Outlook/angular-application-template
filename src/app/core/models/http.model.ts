import { HttpMethodTypeEnum } from '../enums/http-method-type.enum';

export class HttpRequestModel {
    url: string;
    httpMethodTypeId: HttpMethodTypeEnum;
    data: any;
}

export class HttpResponseModel {
    isSuccess: boolean;
    data: any;
    isError: boolean;
    error: any;
}
