import { Component } from '@angular/core'
import '@nectary/components/file-status'
import '@nectary/components/icon-button'
import '@nectary/components/text'
import '@nectary/components/progress'
import '@nectary/assets/icons/close'

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
