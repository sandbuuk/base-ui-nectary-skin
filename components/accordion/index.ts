import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCsvSet,
  getFirstCsvValue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchAccordionItemElement } from '../accordion-item/types'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.addEventListener('change', this.#onOptionChange)

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  static get observedAttributes() {
    return ['value']
  }

  connectedCallback() {
    this.setAttribute('aria-label', 'accordion')
  }

  get nodeName() {
    return 'select'
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple() {
    return getBooleanAttribute(this, 'multiple')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target as TSinchAccordionItemElement
    const value = (e as CustomEvent).detail
    const result = this.multiple
      ? updateCsv(this.value, value, !$elem.checked)
      : $elem.checked ? '' : value

    this.dispatchEvent(
      new CustomEvent('change', { detail: result, bubbles: true })
    )
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = getCsvSet(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && values.has(getAttribute($option, 'value', ''))

        updateBooleanAttribute($option, 'checked', isChecked)
      }
    } else {
      const value = getFirstCsvValue(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

        updateBooleanAttribute($option, 'checked', isChecked)
      }
    }
  }
})

export type TSinchAccordionElement = HTMLElement & {
  value: string,
  multiple: boolean,
}

export type TSinchAccordionReact = TSinchElementReact<TSinchAccordionElement> & {
  multiple?: boolean,
  value: string,
  onChange: (e: SyntheticEvent<TSinchAccordionElement, CustomEvent<string>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-accordion': TSinchAccordionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-accordion': TSinchAccordionElement,
  }
}
