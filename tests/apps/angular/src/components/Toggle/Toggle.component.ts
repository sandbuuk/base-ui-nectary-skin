import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/toggle'

@Component({
  selector: 'toggle-component',
  templateUrl: './Toggle.component.html',
  styles: [':host{ display: contents; }']
})

export class ToggleComponent {
  isChecked: boolean | null
  isControlled: boolean
  text: string | null
  isDisabled: boolean
  isSmall: boolean
  isLabeled: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.isChecked = search.get('checked') !== null
    this.isControlled = search.get('uncontrolled') === null
    this.text = search.get('text')
    this.isDisabled = search.get('disabled') !== null
    this.isSmall = search.get('small') !== null
    this.isLabeled = search.get('labeled') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.isChecked = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-toggle-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-toggle-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-toggle-blur'))
  }
}
