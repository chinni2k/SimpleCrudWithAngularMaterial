import { Observable } from "rxjs";
import { EmployeeModel } from "src/app/Models/EmployeeModel";

export interface IEmployeeService {
    getAll(): Observable<EmployeeModel[]>;
    addData(employeeModel: EmployeeModel): Observable<EmployeeModel>;
    updateData( employee: EmployeeModel): Observable<EmployeeModel>;
    deleteData(id: number): Observable<boolean>;
}
