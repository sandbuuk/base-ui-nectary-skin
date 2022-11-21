import { Component } from '@angular/core'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/progress'
import '@sinch-engage/nectary/icons/close'

@Component({
  selector: 'file-status-component',
  templateUrl: './FileStatus.component.html',
  styles: [':host{ display: contents; }']
})

export class FileStatusComponent {
  type: string | null
  filename: string | null
  hasDescription: boolean
  hasProgress: boolean
  constructor() {
    const url = new URL(location.href)

    this.type = url.searchParams.get('type')
    this.filename = url.searchParams.get('filename')
    this.hasDescription = url.searchParams.get('description') !== null
    this.hasProgress = url.searchParams.get('progress') !== null
  }
}
