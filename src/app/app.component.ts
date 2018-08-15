import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  lol: number;

  constructor() {
    this.lol = 1;

    setTimeout(() => this.lol = 2, 3000);
  }
}
