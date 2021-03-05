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

    @Output() yourDataEmployee = {};

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        // @ts-ignore
        const id = jwtDecode(localStorage.getItem('token')).id;
        console.log(id);
        this.getEmployeeLoged(id);
    }

    getEmployeeLoged = (id) => {
        this.http.get(AppConstants.baseApi + '/employee/' + id, AppConstants.httpHearders)
            .subscribe(data => {
                // @ts-ignore
                // @ts-ignore
                this.yourDataEmployee = data.body.employee;
            });
    };
}
