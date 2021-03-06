import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../app-constants';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {

    constructor(private http: HttpClient) {
    }

    getAllEmployee = () => {
        return this.http.get(AppConstants.baseApi + '/employees', AppConstants.httpHearders);
    };

    getEmployeeById = (id) => {
        return this.http.get(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders);
    };

    updateEmployee = (id, employee) => {
        // @ts-ignore
        const url = AppConstants.baseApi + '/employee/' + id;
        return this.http.put(url, employee, AppConstants.httpHearders);
    };

    updateUser = (id, user) => {
        // @ts-ignore
        // const id = jwtDecode(localStorage.getItem('token')).id;
        const url = AppConstants.baseApi + '/user/' + id;
        return this.http.put(url, user, AppConstants.httpHearders);
    };
}
