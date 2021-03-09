import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {ToastrService} from 'ngx-toastr';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {

    constructor(private http: HttpClient, private toast: ToastrService) {
    }


    getAllEmployee = () => {
        return this.http.get(AppConstants.baseApi + '/employees', AppConstants.httpHearders);
    }

    getEmployeeById = (id) => {
        return this.http.get(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders);
    }

    updateEmployee = (id, employee) => {
        console.log(employee);
        // @ts-ignore
        const url = AppConstants.baseApi + '/employee/' + id;
        return this.http.put(url, employee, AppConstants.httpHearders)
            .pipe(catchError(this.handlerError));
    }

    updateUser = (id, user) => {
        console.log(user);
        // @ts-ignore
        const url = AppConstants.baseApi + '/user/' + id;
        return this.http.put(url, user, AppConstants.httpHearders)
            .pipe(catchError(this.handlerError));
    }

    delete = (id) => {
        return this.http.delete(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders)
            .pipe(catchError(this.handlerError));
    }

    private handlerError = (error: HttpErrorResponse) => {
        if (error.status === 400) {
            this.toast.error('Não foi possível atualizar/deletar. Dados Inválidos');
        }
        return throwError(error);
    }


}
