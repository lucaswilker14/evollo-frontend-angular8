import {HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

export class AppConstants {

    public static get baseApi(): string {
        return `http://${environment.IP}:${environment.PORT}/evollo/api`;
    }

    public static get httpHearders(): any {
        return {
            headers: new HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Access-Control-Allow-Origin', '*')
                .append('Authorization', 'Bearer ' + localStorage.getItem('token'))

        };
    }
}
