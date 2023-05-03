import { Component } from '@angular/core'
import '@sinch-engage/nectary-theme-base/index'

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pathname: string
  style: Partial<CSSStyleDeclaration>

  constructor() {
    const url = new URL(location.href)
    this.pathname = url.pathname

    const width = Number(url.searchParams.get('width') ?? '0')
    const height = Number(url.searchParams.get('height') ?? '0')

    this.style = {
      display: 'flex',
      padding: '120px'
    }

    if (height > 0) {
      this.style.height = height + 'px'
    }

    if (width > 0) {
      this.style.flexDirection = 'column',
      this.style.width = width + 'px'
    }
  }
}
