import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
handleError(error: any) {
  throw new Error('Method not implemented.');
}

constructor() { }

}
