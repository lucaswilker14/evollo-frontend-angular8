import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import jwtDecode from 'jwt-decode';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeDataService} from './employee-data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit, OnDestroy {

    @ViewChild('password') password: ElementRef;
    @ViewChild('formControl') formControlHtml: ElementRef;

    isHiddenUpdateButton = false;
    isHiddenLoadingButton = true;

    @Input() title = 'Dados Usuário';


    employeeData = {
        id: '',
        name: '',
        email: '',
        cpf: '',
        jobRole: '',
        salary: '',
        permission: ''
    };
    userData = {
        name: '',
        username: '',
        password: ''
    };

    optionPermissions = [
        {name: 'User', value: 'USER'},
        {name: 'Admin', value: 'ADMIN'}
    ];

    private idUser;
    private idUserSession;

    isTableView: boolean;


    constructor(private employeeDataService: EmployeeDataService, private router: Router,
                private toast: ToastrService, private activedRoute: ActivatedRoute,
                private activatedRoute: ActivatedRoute, private renderer: Renderer2) {
    }


    ngOnInit(): void {

        this.checkIsTableView();

        // @ts-ignore
        this.idUserSession = jwtDecode(localStorage.getItem('token')).id;

        this.activedRoute.params.subscribe((params: any) => {
            this.idUser = params.id;
        });

        this.employeeDataService.getEmployeeById(this.idUser)
            .subscribe((data: any) => {
                this.employeeData = data.body.employee;
                this.userData = data.body.user;
            });
    }

    ngOnDestroy(): void {
        this.employeeData = {
            id: '',
            name: '',
            email: '',
            cpf: '',
            jobRole: '',
            salary: '',
            permission: ''
        };
        this.userData = {
            name: '',
            username: '',
            password: ''
        };
    }

    goBack = () => {
        this.isTableView ? this.router.navigate(['employees']) : this.router.navigate(['home']);
    }

    update = (event) => {

        this.swapLoadingButton(true, false);
        this.validatedFormInputs(event);

        this.userData.password = this.password.nativeElement.value;
        this.userData.name = this.employeeData.name;

        this.employeeDataService.updateEmployee(this.idUser, this.employeeData)
            .subscribe(() => {
                setTimeout(() => {
                    this.toast.success('Atualizado com Sucesso');
                    this.swapLoadingButton(false, true);
                }, 2000);
            }, () => this.swapLoadingButton(false, true));

        this.employeeDataService.updateUser(this.idUser, this.userData)
            .subscribe(() => {
                setTimeout(() => {
                    this.swapLoadingButton(false, true);
                }, 2000);
            }, () => this.swapLoadingButton(false, true));
    }

    swapLoadingButton = (isHiddenRegister: boolean, isHiddenLoading: boolean) => {
        this.isHiddenUpdateButton = isHiddenRegister;
        this.isHiddenLoadingButton = isHiddenLoading;
    }

    checkUpdatePermission = () => {
        return this.employeeData.permission === 'ADMIN'
            && this.employeeData.id !== this.idUserSession;
    }

    checkIsTableView = () => {
        this.activatedRoute.queryParamMap
            .subscribe((params) => {
                if (params.get('goBackView') !== null) {
                    this.isTableView = true;
                }
            });
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
