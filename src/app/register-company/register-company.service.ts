import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class RegisterCompanyService {

    constructor(private http: HttpClient, private toast: ToastrService) {
    }

    registerCompany = (company) => {
        const url = AppConstants.baseApi + '/company';
        return this.http.post(url, company, AppConstants.httpHearders)
            .pipe(catchError(this.handleError));
    }

    private handleError = (error: HttpErrorResponse) => {
        this.toast.error('Não foi possivel cadastrar empresa');
        return throwError(error);
    }
}
