import { Component } from '@angular/core'
import '@nectary/components/alert'
import '@nectary/components/alert-close'
import '@nectary/components/alert-button'

@Component({
  selector: 'alert-component',
  templateUrl: './Alert.component.html',
  styleUrls: ['./Alert.component.css']
})

export class AlertComponent {
  type?: string
  text?: string
  title?: string
  actionText?: string
  isDismissable: boolean
  isMultiline: boolean
  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type') ?? undefined
    this.text = url.searchParams.get('text') ?? undefined
    this.title = url.searchParams.get('title') ?? undefined
    this.actionText = url.searchParams.get('action') ?? undefined
    this.isDismissable = url.searchParams.get('dismissable') != null
    this.isMultiline = url.searchParams.get('multiline') != null
  }
}
