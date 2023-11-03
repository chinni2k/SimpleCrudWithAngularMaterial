import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from 'src/utils/errorHandler/error-handler.service';
import { GenericService } from 'src/utils/generic-service/generic.service';
import { EmployeeModel } from '../Models/EmployeeModel';
import { environment } from '../environment/env.dev';
import { GetAll } from './constants/endpoints.global';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends GenericService<EmployeeModel> {
  constructor(http: HttpClient, errorHandler: ErrorHandlerService) {
    super(http, errorHandler);
  }

  public getAll(): Observable<EmployeeModel[]> {
    let baseUrl = environment.baseApi + GetAll;
    return this.read(baseUrl);
  }
}
