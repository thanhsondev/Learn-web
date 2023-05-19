import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})

export class Ex3Component {
  section = 'Exercise 3';
  isLoggedIn = false;

  onLogin() {
    this.isLoggedIn = true;
  }
}
