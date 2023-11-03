import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../Models/EmployeeModel';
import { environment } from '../environment/env.dev';
import { IEmployeeService } from './Iservices/IEmployee';
import { ADD, DELETE, GetAll, UPDATE } from './constants/endpoints.global';

@Injectable()
export class EmployeeService implements IEmployeeService {
  baseUrl = environment.baseApi;
  http = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);

  constructor() { }

  public getAll(): Observable<EmployeeModel[]> {
    let baseUrl = environment.baseApi;
    return this.http.get<EmployeeModel[]>(baseUrl + GetAll);
  }
  public addData(employeeModel: EmployeeModel): Observable<EmployeeModel> {
    let baseUrl = this.baseUrl + ADD;
    return this.http.post<EmployeeModel>(baseUrl, employeeModel);
  }

  public updateData(employee: EmployeeModel): Observable<EmployeeModel> {
    let newUrl = environment.baseApi + UPDATE;
    return this.http.put<EmployeeModel>(newUrl, employee);
  }

  public deleteData(id: number): Observable<boolean> {
    
    let newUrl = this.baseUrl + DELETE + id;
     // Append the employee ID to the URL
    return this.http.delete<boolean>(newUrl);
  }


  // public deleteData2(id: number): Observable<boolean> {
  //   const url = `${this.baseUrl}/api/Employee/DeleteData?id=${id}`;
  //   return this.http.delete<boolean>(url);
  // }
}
