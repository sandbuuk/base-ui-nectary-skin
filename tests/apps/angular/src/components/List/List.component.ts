import { Component } from '@angular/core'
import '@nectary/components/list'
import '@nectary/components/list-item'
import '@nectary/components/icon-button'
import '@nectary/components/text'
import '@nectary/assets/icons/add'
import '@nectary/assets/icons-branded/chatbot'

@Component({
  selector: 'list-component',
  templateUrl: './List.component.html',
  styles: [':host{ display: contents; }']
})

export class ListComponent {
  constructor() {}
}
