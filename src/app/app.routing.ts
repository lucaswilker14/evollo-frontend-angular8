import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomePageComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
