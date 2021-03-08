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

    // @ts-ignore
    role = jwtDecode(localStorage.getItem('token')).role.map(auth => auth.authority);

    // @ts-ignore
    idUser = jwtDecode(localStorage.getItem('token')).id;

    constructor() {}

    ngOnInit(): void {}

}
