import { Component } from '@angular/core'
import '@sinch-engage/nectary/accordion'

@Component({
  selector: 'accordion-component',
  templateUrl: './Accordion.component.html',
  styleUrls: ['./Accordion.component.css']
})

export class AccordionComponent {
  value: string
  isControlled: boolean
  isMultiple: boolean
  options: any[]

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isMultiple = search.get('multiple') !== null
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
      window.dispatchEvent(new CustomEvent('sinch-accordion-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
