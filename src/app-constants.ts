import {HttpHeaders} from '@angular/common/http';

export class AppConstants {

  public static get baseApi(): string {
    return 'http://localhost:8080/evollo/api';
  }

  public static get httpHearders(): any {
    return {
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '*'),
    };
  }
}
