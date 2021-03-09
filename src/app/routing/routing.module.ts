import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {RegisterCompanyComponent} from '../register-company/register-company.component';
import {RegisterEmployeeComponent} from '../register-employee/register-employee.component';
import {TableEmployeesComponent} from '../table-employees/table-employees.component';
import {EmployeeDataComponent} from '../employee-data/employee-data.component';

import {AuthGuards} from '../guards/auth.guards';
import {PermissionGuard} from '../guards/permission.guard';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomePageComponent, canActivate: [AuthGuards], canLoad: [AuthGuards] },
    {path: 'company', component: RegisterCompanyComponent, canActivate: [AuthGuards, PermissionGuard], canLoad: [AuthGuards]},
    {path: 'registerEmployee', component: RegisterEmployeeComponent, canActivate: [AuthGuards, PermissionGuard], canLoad: [AuthGuards]},
    {path: 'employees', component: TableEmployeesComponent, canActivate: [AuthGuards, PermissionGuard], canLoad: [AuthGuards]},
    {path: 'employee/:id', component: EmployeeDataComponent, canActivate: [AuthGuards], canLoad: [AuthGuards]},

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}
