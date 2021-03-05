import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {LoginService} from './login.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    title = 'evollo-frontend';
    user = {username: '', password: ''};
    @ViewChild('formControl') formControlHtml: ElementRef;

    constructor(private loginService: LoginService, private renderer: Renderer2, private toast: ToastrService, private router: Router) {
    }

    login = (event) => {
        this.validatedFormInputs(event);
        this.loginService.login(this.user)
            .subscribe((data: any) => {
                    const token = data.accessToken;
                    localStorage.setItem('token', token);
                    this.router.navigate(['home']);
                    this.toast.success('Logado com Sucesso!');
                },
                error => {
                    this.toast.error('Usuário não Cadastrado!');
                    console.log(error);
                }
            );
    }

    validatedFormInputs = (event) => {
        const InputFormControl = this.formControlHtml.nativeElement[0];
        if (InputFormControl.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.renderer.addClass(this.formControlHtml.nativeElement, 'was-validated');
    }

}
