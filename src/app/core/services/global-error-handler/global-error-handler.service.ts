import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  // function to catch all errors globally
  handleError(error) {
    console.error(error);

    // NOTE: use below line if wants to rethrow
    throw error;
  }
}
