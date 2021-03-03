import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../app-constants';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login = (user) => {
    return this.http.post(AppConstants.baseApi + '/auth/login', user, AppConstants.httpHearders)
      .subscribe((data: any) => {
        const token = data.accessToken;
        localStorage.setItem('token', token);
    },
        error => console.log('Error')
    );
  }
}
