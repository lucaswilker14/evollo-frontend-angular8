import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    title = 'evollo-frontend';
    user = {username: '', password: ''};
    @ViewChild('formControl') formControlHtml: ElementRef;

    constructor(private authService: AuthService, private renderer: Renderer2,
                private toast: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
        localStorage.clear();
    }

    login = (event) => {
        this.validatedFormInputs(event);
        this.authService.login(this.user)
            .subscribe((data: any) => {
                    const token = data.accessToken;
                    localStorage.setItem('token', token);
                    this.authService.authenticateUser();
                    this.router.navigate(['home']);
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
