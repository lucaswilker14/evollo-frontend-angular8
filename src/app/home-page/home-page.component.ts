import {Component, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AppConstants} from '../app-constants';
import {HttpClient} from '@angular/common/http';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    @Output() yourDataEmployee: any = {};

    // @ts-ignore
    idUser = jwtDecode(localStorage.getItem('token')).id;

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getEmployeeLoged(this.idUser);
    }

    getEmployeeLoged = (id) => {
        this.http.get(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders)
            .subscribe((data: any) => {
                this.yourDataEmployee = data.body.employee;
            });
    };
}
