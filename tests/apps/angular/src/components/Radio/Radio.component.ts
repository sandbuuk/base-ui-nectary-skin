import { Component } from '@angular/core'
import '@nectary/components/radio'
import '@nectary/components/radio-option'

const options = [{
  value: '1',
  text: 'Option value 1',
}, {
  value: '2',
  text: 'Option value 2',
  disabled: true,
}, {
  value: '3',
  text: 'Option value 3',
}, {
  value: '4',
  text: 'Option value 4',
}]
const singleOption = [{
  value: '1',
  text: 'Option value 1',
}]

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
  styles: [':host{ display: contents; }']
})

export class RadioComponent {
  value: string
  isControlled: boolean
  isInvalid: boolean
  options: any[]

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isInvalid = search.get('invalid') !== null
    this.value = search.get('value') ?? ''

    this.options = search.get('example') === 'single'
      ? singleOption
      : options
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-radio-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
