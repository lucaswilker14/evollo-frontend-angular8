import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RegisterEmployeeComponent} from './register-employee/register-employee.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {TableEmployeesComponent} from './table-employees/table-employees.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';
import {RoutingModule} from './routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { SvgMainComponent } from './svg-main/svg-main.component';

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
        SvgMainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            maxOpened: 1,
            tapToDismiss: true,
            messageClass: 'center'
        }),
        MDBBootstrapModule.forRoot(),
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
