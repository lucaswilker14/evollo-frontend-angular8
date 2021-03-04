import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterCompanyService} from './register-company.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.component.html',
    styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit, OnDestroy {

    registerCompany: any = {
        companyName: '',
        cnpj: '',
        companyCity: '',
        state: '',
        address: ''
    };

    constructor(private router: Router, private registerCompanyService: RegisterCompanyService, private toast: ToastrService) {
    }

    ngOnInit(): void {
    }


    ngOnDestroy(): void {
        this.registerCompany = {
            companyName: '',
            cnpj: '',
            companyCity: '',
            state: '',
            address: ''
        };
    }

    goBack = () => {
        this.router.navigate(['home']);
    };

    registerUser = () => {
        this.registerCompanyService.registerCompany(this.registerCompany)
            .subscribe(data => {
                    console.log(data);
                    this.toast.success('Empresa cadastrada com Sucesso');
                    this.router.navigate(['']);
                },
                error1 => {
                    console.log(error1);
                    this.toast.error('Não foi possivel cadastrar empresa');
                }
            );
    };

}
