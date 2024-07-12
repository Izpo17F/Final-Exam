import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class SalaryCalculatorComponent implements OnInit {
  employees: Employee[] = [];
  salaryForm: FormGroup;
  regularSalary: number | null = null;
  extraSalary: number | null = null;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.salaryForm = this.fb.group({
      employeeId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  controlHasError(control: string, error: string) {
    return this.salaryForm.controls[control].hasError(error);
  }

  calculateSalary() {
    if (this.salaryForm.valid) {
      const employeeId = this.salaryForm.value.employeeId;
      const employee = this.employees.find(emp => emp.id === employeeId);

      if (employee) {
        this.regularSalary = employee.salarioPorHora * employee.horasTrabajadas;
        this.extraSalary = this.regularSalary + (employee.salarioPorHora * 1.5 * employee.horasExtrasTrabajadas);
      }
    }
  }
}
