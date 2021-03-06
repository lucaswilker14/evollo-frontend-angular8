import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterCompanyService} from './register-company.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.component.html',
    styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

    constructor(private router: Router, private registerCompanyService: RegisterCompanyService,
                private toast: ToastrService, private renderer: Renderer2) {
    }

    @ViewChild('formControl') formControlHtml: ElementRef;

    registerCompanyModel: any = {
        companyName: '',
        cnpj: '',
        companyCity: '',
        state: '',
        address: '',
        employees: []
    };

    isHiddenRegisterButton = false;
    isHiddenLoadingButton = true;

    ngOnInit(): void {
    }

    goBack = () => {
        this.router.navigate(['home']);
    };

    registerCompany = (event) => {
        this.validatedFormInputs(event);
        this.swapLoadingButton(true, false);
        this.registerCompanyService.registerCompany(this.registerCompanyModel)
            .subscribe(data => {
                    setTimeout(() => {
                        this.swapLoadingButton(false, true);
                        this.toast.success('Empresa cadastrada com Sucesso');
                        this.router.navigate(['home']);
                    }, 2000);

                },
                error1 => {
                    console.log(error1);
                    this.swapLoadingButton(false, true);
                    this.toast.error('Não foi possivel cadastrar empresa');
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

}
