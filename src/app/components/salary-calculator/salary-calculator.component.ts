import { EmployeeResult } from '../../models/Employee-Result.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/Employee.interface';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class SalaryCalculatorComponent implements OnInit {
  employees: EmployeeResult[] = [];
  salaryForm: FormGroup;
  regularSalary: number | null = null;
  extraSalary: number | null = null;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.salaryForm = this.fb.group({
      employeeId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeResults();
  }

  controlHasError(control: string, error: string) {
    return this.salaryForm.controls[control].hasError(error);
  }

  calculateSalary() {
    if (this.salaryForm.valid) {
      const employeeId = this.salaryForm.value.employeeId;
      const employee = this.employees.find(emp => emp.id === employeeId);

      if (employee) {
        this.regularSalary = employee.hourlyWage * employee.hoursWorked;
        this.extraSalary = this.regularSalary + ((employee.hourlyWage + employee.hourlyWage* 1.5) * employee.overtimeHours);
      }
    }
  }
}
