import { Component } from '@angular/core'
import '@nectary/components/text'
import '@nectary/components/accordion'
import '@nectary/components/accordion-item'
import { TSinchAccordionStatusType } from '@nectary/components/accordion-item/types'

type TExampleItem = {
  value: string,
  label: string,
  icon?: boolean,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
  content?: string,
  optional?: string,
}

const items: TExampleItem[] = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}, {
  value: '2',
  label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  status: 'info',
  content: 'Accordion content',
  optional: 'Optional',
}, {
  value: '3',
  label: 'Option value 3',
  disabled: true,
  icon: true,
  optional: 'Disabled',
}, {
  value: '4',
  label: 'Option value 4',
  content: 'Accordion content',
}]

const singleItems: TExampleItem[] = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}]

@Component({
  selector: 'accordion-component',
  templateUrl: './Accordion.component.html',
  styles: [':host{ display: contents; }']
})

export class AccordionComponent {
  value: string
  isControlled: boolean
  isMultiple: boolean
  options: TExampleItem[]

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isMultiple = search.get('multiple') !== null
    this.value = search.get('value') ?? ''
    this.options = search.get('example') === 'single'
      ? singleItems
      : items
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-accordion-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
