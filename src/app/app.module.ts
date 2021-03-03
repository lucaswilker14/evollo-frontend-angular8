import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      tapToDismiss: true,
      messageClass: 'center' }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
