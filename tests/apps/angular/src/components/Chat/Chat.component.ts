import { Component } from '@angular/core'
import '@sinch-engage/nectary/chat'
import '@sinch-engage/nectary/chat-block'
import '@sinch-engage/nectary/chat-bubble'
import '@sinch-engage/nectary/avatar'

@Component({
  selector: 'chat-component',
  templateUrl: './Chat.component.html',
  styles: [':host{ display: contents; }']
})

export class ChatComponent {
  isBubble: boolean
  type: string | null

  constructor() {
    const url = new URL(location.href)
    this.isBubble = url.searchParams.get('example') === 'bubble'
    this.type = url.searchParams.get('type')
  }
}
