import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../app-constants';


@Injectable({
    providedIn: 'root'
})
export class RegisterCompanyService {

    constructor(private http: HttpClient) {
    }

    registerCompany = (company) => {
        return this.http.post(AppConstants.baseApi + '/company', company, AppConstants.httpHearders);

    }
}
