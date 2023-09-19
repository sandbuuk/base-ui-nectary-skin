import { Component } from '@angular/core'
import '@nectary/components/file-drop'
import '@nectary/components/button'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'file-drop-component',
  templateUrl: './FileDrop.component.html',
  styles: [':host{ display: contents; }']
})

export class FileDropComponent {
  isMultiple: boolean
  isDisabled: boolean
  isInvalid: boolean
  accept: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap

    this.isMultiple = search.get('multiple') !== null
    this.isDisabled = search.get('disabled') !== null
    this.isInvalid = search.get('invalid') !== null
    this.accept = search.get('accept')
  }

  onChange(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-change', { detail: e.detail }))
  }
  onInvalid(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-file-drop-invalid', { detail: e.detail }))
  }
}
