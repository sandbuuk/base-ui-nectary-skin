import { Component } from '@angular/core'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

@Component({
  selector: 'file-drop-component',
  templateUrl: './FileDrop.component.html',
  styleUrls: ['./FileDrop.component.css']
})

export class FileDropComponent {
  isMultiple: boolean
  isDisabled: boolean
  isInvalid: boolean
  accept: string | null

  constructor() {
    const url = new URL(location.href)

    this.isMultiple = url.searchParams.get('multiple') !== null
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isInvalid = url.searchParams.get('invalid') !== null
    this.accept = url.searchParams.get('accept')
  }

  onChange(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-change', { detail: e.detail }))
  }
  onInvalid(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-invalid', { detail: e.detail }))
  }
}
