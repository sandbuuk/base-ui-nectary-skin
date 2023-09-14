import { Component } from '@angular/core'
import '@nectary/components/chat'
import '@nectary/components/chat-block'
import '@nectary/components/chat-bubble'
import '@nectary/components/avatar'

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
