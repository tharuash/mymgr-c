import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Employee } from '../models/employee';
import { URL } from '../_path';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getEmployees() {
    return this.http.get<Employee[]>(`${URL}employees/1`);
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${URL}employees/1`, employee);
  }

  getEmployee(id) {
    return this.http.get<Employee>(`${URL}employees/1/${id}`);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${URL}employees/1`, employee);
  }
}
