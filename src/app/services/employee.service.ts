// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
