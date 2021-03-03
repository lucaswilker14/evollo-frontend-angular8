import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '/', component: AppComponent},
    {path: '/home', component: HomePageComponent}
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
