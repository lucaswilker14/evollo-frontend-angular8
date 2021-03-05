import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterEmployeeService} from './register-employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-register-employee',
    templateUrl: './register-employee.component.html',
    styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

    @ViewChild('formControl') formControlHtml: ElementRef;

    registerEmployee = {
        name: '',
        email: '',
        cpf: '',
        jobRole: '',
        salary: '',
        permission: ''
    };

    optionPermissions = [
        {name: 'User', value: 'USER'},
        {name: 'Admin', value: 'ADMIN'}
    ];

    constructor(private router: Router, private renderer: Renderer2,
                private registerEmployeeService: RegisterEmployeeService, private toast: ToastrService) {
    }

    ngOnInit(): void {
    }

    goBack = () => {
        this.router.navigate(['/home']);
    }

    registerUser = (event) => {
        this.validatedFormInputs(event);
        this.registerEmployeeService.registerEmployee(this.registerEmployee)
            .subscribe(data => {
                    this.toast.success('Funcionário Registrado com Sucesso!');
                    this.toast.info('Email com credenciais enviado para o email ' + this.registerEmployee.email);
                    this.router.navigate(['home']);
                },
                error => {
                    this.toast.error('Não foi possivel cadastrar funcionário');
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
