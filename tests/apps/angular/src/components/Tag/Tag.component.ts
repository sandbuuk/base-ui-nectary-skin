import { Component } from '@angular/core'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/tag-close'

@Component({
  selector: 'tag-component',
  templateUrl: './Tag.component.html',
  styleUrls: ['./Tag.component.css']
})

export class TagComponent {
  category?: string
  text?: string
  isDismissable: boolean
  isSmall: boolean
  isInverted: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.category = url.searchParams.get('category') ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.isDismissable = url.searchParams.get('dismissable') != null
    this.isSmall = url.searchParams.get('small') != null
    this.isInverted = url.searchParams.get('inverted') != null
    this.hasIcon = url.searchParams.get('icon') != null
  }

  onCloseClick() {
    window.dispatchEvent(new CustomEvent('sinch-tag-close-click'))
  }
  onCloseFocus() {
    window.dispatchEvent(new CustomEvent('sinch-tag-close-focus'))
  }
  onCloseBlur() {
    window.dispatchEvent(new CustomEvent('sinch-tag-close-blur'))
  }
}
