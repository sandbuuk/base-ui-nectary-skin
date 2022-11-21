import { Component } from '@angular/core'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icons/upload'

@Component({
  selector: 'file-picker-component',
  templateUrl: './FilePicker.component.html',
  styles: [':host{ display: contents; }']
})

export class FilePickerComponent {
  isMultiple: boolean
  accept: string | null

  constructor() {
    const url = new URL(location.href)

    this.isMultiple = url.searchParams.get('multiple') !== null
    this.accept = url.searchParams.get('accept')
  }

  onChange(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-file-picker-change', { detail: e.detail }))
  }
  onInvalid (e: CustomEvent<string>) {
    window.dispatchEvent(new CustomEvent('sinch-file-picker-invalid', { detail: e.detail }))
  }
}
