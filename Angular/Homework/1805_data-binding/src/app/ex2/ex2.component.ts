import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {
  section = 'Exercise 2';
  kiet = {
    name: 'Tuan Kiet',
    age: 20,
    address: 'Da Nang city',
    email: 'ngoitrong-toilet.gaothet-tenEM@gmail.com'
  }
}
