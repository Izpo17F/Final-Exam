import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.interface';
import { EmployeeResult } from '../models/Employee-Result.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  private results: EmployeeResult[] = [];
  private idCounter = 0;

  addEmployeeResult(result: Omit<Employee, 'id'>) {
    const newResult: EmployeeResult = { ...result, id: this.idCounter++ };
    this.results.push(newResult);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeResults(): EmployeeResult[] {
    return this.results;
  }
}
