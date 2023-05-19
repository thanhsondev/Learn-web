import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component {
  section = 'Exercise 4';
  username = "default user";
  pwd = "default password";

  onLogin() {
    alert("Login successful" + "\nUsername: " + this.username + "\nPassword: " + this.pwd);
  }
}
