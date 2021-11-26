import { Component } from '@angular/core'

@Component({
  styleUrls: ['./app.component.css'],
  selector: '#app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pathname: string

  constructor() {
    this.pathname = location.pathname
  }
}
