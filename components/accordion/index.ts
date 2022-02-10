import { isAccordionItemElement } from '../accordion-item'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCSVSet,
  getFirstCSValue,
  updateAttribute,
  updateBooleanAttribute,
  updateCSV,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion', class extends HTMLElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.addEventListener('change', this.#onOptionChange)

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  static get observedAttributes() {
    return ['value']
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
        this.onValueChange(newVal ?? '')

        break
      }
    }
  }

  #onSlotChange = () => {
    this.onValueChange(this.value)
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    if (!isAccordionItemElement(e.target)) {
      return
    }

    const { value, isChecked } = (e as CustomEvent).detail

    const csv = updateCSV(
      this.multiple ? this.value : value,
      value,
      isChecked
    )

    this.dispatchEvent(
      new CustomEvent('change', { detail: csv, bubbles: true })
    )
  }

  onValueChange(csv: string) {
    if (this.multiple) {
      const values = getCSVSet(csv)

      for (const $option of this.#$slot.assignedElements()) {
        if (isAccordionItemElement($option)) {
          $option.checked = $option.disabled !== true && values.has($option.value)
        }
      }
    } else {
      const value = getFirstCSValue(csv)

      for (const $option of this.#$slot.assignedElements()) {
        if (isAccordionItemElement($option)) {
          $option.checked = $option.disabled !== true && $option.value === value
        }
      }
    }
  }
})

type TSinchAccordionElement = HTMLElement & {
  value: string,
  multiple: boolean,
}

type TSinchAccordionReact = TSinchElementReact<TSinchAccordionElement> & {
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
