import { Component } from '@angular/core';

@Component({
  selector: 'app-container1',
  templateUrl: './container1.component.html',
  styleUrls: ['./container1.component.css']
})
export class Container1Component {
  title: String;
  msg1: String;
  msg2: String;

  constructor() {
    this.title = "HELLO WORLD!";
    this.msg1 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
    this.msg2 = "There are many variations of passages of Lorem Ipsum available.";
  }
}
