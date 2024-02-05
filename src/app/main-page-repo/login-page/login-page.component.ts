// login-page.component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    standalone: true,
    imports: [ButtonComponent, FormsModule]
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    console.log('Login with:', this.username, this.password);
    // Implement your login logic here
  }
}
