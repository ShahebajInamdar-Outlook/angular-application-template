import { HttpMethodTypeEnum } from '../enums/http-method-type.enum';

export class HttpRequestModel {
    constructor() {
        this.data = null;
    }

    url: string;
    httpMethodTypeId: HttpMethodTypeEnum;
    data: any;
}

export class HttpResponseModel {
    constructor() {
        this.isSuccess = false;
        this.data = null;
        this.isError = false;
        this.error = null;
    }

    isSuccess: boolean;
    data: any;
    isError: boolean;
    error: any;
}
