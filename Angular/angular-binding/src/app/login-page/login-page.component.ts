import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username = "default user";
  pwd = "default password";

  onLogin() {
    console.log("username: " + this.username);
    console.log("password: " + this.pwd);
  }
}
