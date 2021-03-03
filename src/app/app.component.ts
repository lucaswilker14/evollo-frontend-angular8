import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evollo-frontend';
  user = {username: '', password: ''};
  @ViewChild('formControl') formControlHtml: ElementRef;

  constructor(private loginService: LoginService, private renderer: Renderer2) { }

  login = (event) => {
    this.validatedFormInputs(event);
    this.loginService.login(this.user);
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
