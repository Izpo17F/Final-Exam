// src/app/components/employee-form/employee-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: [null, [Validators.required, Validators.min(0)]],
      hoursWorked: [null, [Validators.required, Validators.min(0)]],
      overtimeHours: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeService.addEmployeeResult(newEmployee);
      this.employeeForm.reset();
    }
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.employeeForm.controls[controlName].hasError(errorName) && this.employeeForm.controls[controlName].touched;
  }
}
