
import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';

export const routes: Routes = [
  { path: '', component: EmployeeFormComponent },
  { path: 'salary', component:SalaryCalculatorComponent }
];
