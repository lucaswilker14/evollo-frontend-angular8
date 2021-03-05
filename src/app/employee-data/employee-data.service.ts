import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {

    constructor(private http: HttpClient) {
    }

    getEmployeeById = (id) => {
        return this.http.get(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders);
    }

    updateEmployee = (employee) => {
        // @ts-ignore
        const id = jwtDecode(localStorage.getItem('token')).id;
        const url = AppConstants.baseApi + '/employee/' + id;
        return this.http.put(url, employee, AppConstants.httpHearders);
    }

    updateUser = (user) => {
        // @ts-ignore
        const id = jwtDecode(localStorage.getItem('token')).id;
        const url = AppConstants.baseApi + '/user/' + id;
        return this.http.put(url, user, AppConstants.httpHearders);
    }
}
