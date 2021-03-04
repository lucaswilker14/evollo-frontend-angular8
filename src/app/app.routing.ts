import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterEmployeeComponent} from './register-employee/register-employee.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {TableEmployeesComponent} from './table-employees/table-employees.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'company', component: RegisterCompanyComponent},
    {path: 'registerEmployee', component: RegisterEmployeeComponent},
    {path: 'employees', component: TableEmployeesComponent},
    {path: '/employee/:id', component: EmployeeDataComponent},

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
