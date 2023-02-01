import { Component } from '@angular/core'
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/add'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'

@Component({
  selector: 'list-component',
  templateUrl: './List.component.html',
  styles: [':host{ display: contents; }']
})

export class ListComponent {
  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams
  }
}
