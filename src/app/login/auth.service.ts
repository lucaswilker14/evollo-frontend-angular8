import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppConstants} from '../app-constants';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {throwError} from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userIsAuthenticaded = false;

    constructor(private http: HttpClient, private toast: ToastrService) {
    }

    login = (user) => {
        return this.http
            .post(AppConstants.baseApi + '/auth/login', user, AppConstants.httpHearders)
            .pipe(catchError(this.handleError));
    }

    private handleError = (error: HttpErrorResponse) => {
        if (error.status === 400) { this.toast.error('Error no servidor. Credenciais Inválidas'); }
        if (error.status === 401) { this.toast.error('Username ou Senha Inválidos!'); }
        return throwError(error);
    }

    authenticateUser = () => {
        this.userIsAuthenticaded = true;
    }

    deAuthenticateUser = () => {
        this.userIsAuthenticaded = false;
    }

    isAutheticated = () => {
        return this.userIsAuthenticaded;
    }

    isAdmin = () => {
        // @ts-ignore
        const role = jwtDecode(localStorage.getItem('token')).role.map(auth => auth.authority);
        return role.includes('ROLE_ADMIN');
    }

}
