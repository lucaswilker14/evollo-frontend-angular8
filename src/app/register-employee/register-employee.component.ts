import {Component, ElementRef, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterEmployeeService} from './register-employee.service';
import {ToastrService} from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-register-employee',
    templateUrl: './register-employee.component.html',
    styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

    @ViewChild('formControl') formControlHtml: ElementRef;

    @Input() title = 'Registro Funcionário';
    @Input() option = 'Cadastrar';

    isHiddenRegisterButton = false;
    isHiddenLoadingButton = true;

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
    };

    registerUser = (event) => {
        this.isHiddenRegisterButton = true;
        this.isHiddenLoadingButton = false;
        this.validatedFormInputs(event);
        this.registerEmployeeService.registerEmployee(this.registerEmployee)
            .subscribe(data => {
                    this.isHiddenRegisterButton = false;
                    this.isHiddenLoadingButton = true;
                    this.toast.success('Funcionário Registrado com Sucesso!');
                    this.toast.info('Email com credenciais enviado para o email ' + this.registerEmployee.email);
                    this.router.navigate(['home']);

                },
                error => {
                    this.toast.error('Não foi possivel cadastrar funcionário');
                }
            );
    };

    validatedFormInputs = (event) => {
        const InputFormControl = this.formControlHtml.nativeElement[0];
        if (InputFormControl.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.renderer.addClass(this.formControlHtml.nativeElement, 'was-validated');
    };

}
