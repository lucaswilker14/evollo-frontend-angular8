import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
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

    @Input() title = 'Registro Funcionário';
    @Input() option = 'Cadastrar';

    isHiddenRegisterButton = false;
    isHiddenLoadingButton = true;

    selectedCompany = {};

    registerEmployeeModel = {
        name: '',
        email: '',
        cpf: '',
        jobRole: '',
        company: {},
        salary: '',
        permission: ''
    };

    optionPermissions = [
        {name: 'User', value: 'USER'},
        {name: 'Admin', value: 'ADMIN'}
    ];

    optionCompanyNames = [];

    constructor(private router: Router, private renderer: Renderer2,
                private registerEmployeeService: RegisterEmployeeService, private toast: ToastrService) {
    }

    ngOnInit(): void {
        this.getAllCompanies();
    }

    goBack = () => {
        this.router.navigate(['/home']);
    };

    registerEmployee = (event) => {

        this.swapLoadingButton(true, false);

        this.validatedFormInputs(event);

        this.registerEmployeeModel.company = this.selectedCompany;

        this.registerEmployeeService.registerEmployee(this.registerEmployeeModel)
            .subscribe(() => {
                    this.swapLoadingButton(false, true);
                    this.toast.success('Funcionário Registrado com Sucesso!');
                    this.toast.info('Email com credenciais enviado para o email ' + this.registerEmployeeModel.email);
                    this.router.navigate(['home']);

                },
                error => {
                    console.log(error);
                    this.swapLoadingButton(false, true);
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

    swapLoadingButton = (isHiddenRegister: boolean, isHiddenLoading: boolean) => {
        this.isHiddenRegisterButton = isHiddenRegister;
        this.isHiddenLoadingButton = isHiddenLoading;
    };

    getAllCompanies = () => {
        return this.registerEmployeeService.getAllCompanies()
            .subscribe((data: any) => {
                this.optionCompanyNames = data.map(company => company);
            });
    };


}
