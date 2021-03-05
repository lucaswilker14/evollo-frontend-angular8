import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import jwtDecode from 'jwt-decode';
import {Router} from '@angular/router';
import {EmployeeDataService} from './employee-data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {


    @ViewChild('password') password: ElementRef;
    isHiddenUpdateButton = false;
    isHiddenLoadingButton = true;

    employeeData: any = {
        name: '',
        email: '',
        cpf: '',
        jobRole: '',
        salary: '',
        role: ''
    };

    userData: any = {
        name: '',
        username: '',
        password: '*****'
    };

    optionPermissions = [
        {name: 'User', value: 'USER'},
        {name: 'Admin', value: 'ADMIN'}
    ];

    constructor(private employeeDataService: EmployeeDataService, private router: Router, private toast: ToastrService) {
    }


    ngOnInit(): void {
        // @ts-ignore
        const id: any = jwtDecode(localStorage.getItem('token')).id;
        this.employeeDataService.getEmployeeById(id)
            .subscribe((data: any) => {
                this.employeeData = data.body.employee;
                this.userData = data.body.user;
            });
    }

    goBack = () => {
        this.router.navigate(['home']);
    };

    update = () => {
        this.isHiddenUpdateButton = true;
        this.isHiddenLoadingButton = false;
        this.userData.password = this.password.nativeElement.value;
        this.userData.name = this.employeeData.name;
        this.employeeDataService.updateEmployee(this.employeeData)
            .subscribe((data: any) => {
                this.toast.success('Atualizado com Sucesso');
                this.isHiddenUpdateButton = false;
                this.isHiddenLoadingButton = true;
            }, error => console.log(error));

        this.employeeDataService.updateUser(this.userData)
            .subscribe((data: any) => {
                this.toast.success('Atualizado com Sucesso');
            }, error => console.log(error));
    };
}
