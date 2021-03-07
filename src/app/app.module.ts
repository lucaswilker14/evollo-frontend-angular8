import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RoutingModule} from './routing/routing.module';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterEmployeeComponent} from './register-employee/register-employee.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {TableEmployeesComponent} from './table-employees/table-employees.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';
import {HeaderComponent} from './header/header.component';
import {SvgMainComponent} from './svg-main/svg-main.component';

import {AuthService} from './login/auth.service';
import {AuthGuards} from './guards/auth.guards';
import {PermissionGuard} from './guards/permission.guard';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoginComponent,
        RegisterEmployeeComponent,
        RegisterCompanyComponent,
        TableEmployeesComponent,
        EmployeeDataComponent,
        HeaderComponent,
        SvgMainComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            maxOpened: 3,
            tapToDismiss: true,
            messageClass: 'center',
            autoDismiss: true
        }),
        MDBBootstrapModule.forRoot(),
        RoutingModule
    ],
    providers: [AuthService, AuthGuards, PermissionGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
