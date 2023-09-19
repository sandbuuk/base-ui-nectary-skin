import { Component } from '@angular/core'
import '@nectary/components/chat'
import '@nectary/components/chat-block'
import '@nectary/components/chat-bubble'
import '@nectary/components/avatar'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'chat-component',
  templateUrl: './Chat.component.html',
  styles: [':host{ display: contents; }']
})

export class ChatComponent {
  isBubble: boolean
  type: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.isBubble = search.get('example') === 'bubble'
    this.type = search.get('type')
  }
}
