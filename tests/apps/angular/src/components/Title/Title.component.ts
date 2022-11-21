import { Component } from '@angular/core'
import '@sinch-engage/nectary/title'

@Component({
  selector: 'title-component',
  templateUrl: './Title.component.html',
  styles: [':host{ display: contents; }']
})

export class TitleComponent {
  text: string | null
  type: string | null
  level: string | null

  constructor() {
    const url = new URL(location.href)
    this.text = url.searchParams.get('text')
    this.type = url.searchParams.get('type')
    this.level = url.searchParams.get('level')
  }
}
