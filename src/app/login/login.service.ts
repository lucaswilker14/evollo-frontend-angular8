import {Injectable, TemplateRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../app-constants';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private toast: ToastrService) { }

    login = (user) => {
        return this.http.post(AppConstants.baseApi + '/auth/login', user, AppConstants.httpHearders)
            .subscribe((data: any) => {
                    const token = data.accessToken;
                    localStorage.setItem('token', token);
                    this.toast.success('Logado com Sucesso!');
                },
                error => {
                    this.toast.error('Usuário não Cadastrado!');
                    console.log(error);
                }
            );
    }
}
