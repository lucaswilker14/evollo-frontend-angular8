import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../app-constants';

@Injectable({
    providedIn: 'root'
})
export class RegisterEmployeeService {

    constructor(private http: HttpClient) {
    }

    registerEmployee = (employee) => {
        return this.http.post(AppConstants.baseApi + '/employee', employee, AppConstants.httpHearders);
    }

    getAllCompanies = () => {
        return this.http.get(AppConstants.baseApi + '/company', AppConstants.httpHearders);
    }
}
