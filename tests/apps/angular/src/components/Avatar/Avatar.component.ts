import { Component } from '@angular/core'
import '@sinch-engage/nectary/avatar'

@Component({
  selector: 'avatar-component',
  templateUrl: './Avatar.component.html',
  styleUrls: ['./Avatar.component.css']
})

export class AvatarComponent {
  alt: string
  src?: string
  background?: string
  size?: string

  constructor() {
    const url = new URL(location.href)
    this.alt = url.searchParams.get('alt') ?? ''
    this.src = url.searchParams.get('src') ?? undefined
    this.background = url.searchParams.get('bg') ?? undefined
    this.size = url.searchParams.get('size') ?? undefined
  }
}
