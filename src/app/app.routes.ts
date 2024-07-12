// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', component: EmployeeFormComponent },
  // otras rutas si es necesario
];
