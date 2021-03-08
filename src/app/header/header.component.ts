import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() title: string;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {

    }

    logout = () => {
        localStorage.clear();
        this.authService.deAuthenticateUser();
        this.router.navigate(['']);
    }


}
