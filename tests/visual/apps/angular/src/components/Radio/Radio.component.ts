import { Component } from '@angular/core'
import '@nectary/components/radio'

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
  styleUrls: ['./Radio.component.css']
})

export class RadioComponent {
  value: string
  isControlled: boolean
  options: any[]

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.value = search.get('value') ?? ''

    this.options = (() => {
      const data = search.get('options')

      if (data === null) {
        return []
      }

      try {
        return JSON.parse(decodeURI(data))
      } catch {
        return []
      }
    })()
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
  }
}
