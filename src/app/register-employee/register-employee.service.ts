import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class RegisterEmployeeService {

    constructor(private http: HttpClient, private toast: ToastrService) {
    }

    registerEmployee = (employee) => {
        return this.http.post(AppConstants.baseApi + '/employee', employee, AppConstants.httpHearders)
            .pipe(catchError(this.handleError));
    }

    getAllCompanies = () => {
        return this.http.get(AppConstants.baseApi + '/company', AppConstants.httpHearders);
    }

    private handleError = (error: HttpErrorResponse) => {
        this.toast.error('Não foi possivel cadastrar funcionário');
        return throwError(error);
    }
}
