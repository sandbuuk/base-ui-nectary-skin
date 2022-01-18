import { Component } from '@angular/core'

@Component({
  styleUrls: ['./app.component.css'],
  selector: '#app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pathname: string
  style: object

  constructor() {
    const url = new URL(location.href)
    const width = Number(url.searchParams.get('width') ?? '0')

    this.pathname = url.pathname
    this.style = width > 0 ? {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      width: width + 'px',
      padding: '100px'
    } : {
      padding: '100px'
    }
  }
}
