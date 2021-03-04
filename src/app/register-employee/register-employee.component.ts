import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-employee',
    templateUrl: './register-employee.component.html',
    styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    goBack = () => {
        this.router.navigate(['/home']);
    }

    registerUser = () => {
    }

}
