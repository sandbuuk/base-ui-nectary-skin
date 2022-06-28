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
import type { TSinchSegmentedIconControlOptionElement } from '../segmented-icon-control-option'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-icon-control', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.addEventListener('change', this.#onOptionChange)

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  connectedCallback() {
    this.setAttribute('role', 'tablist')
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

    const $elem = (e.target) as TSinchSegmentedIconControlOptionElement
    const value = (e as CustomEvent).detail
    const result = this.multiple
      ? updateCsv(this.value, value, !$elem.checked)
      : value

    this.dispatchEvent(
      new CustomEvent('change', { detail: result, bubbles: true })
    )
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = getCsvSet(csv)

      for (const $el of this.#$slot.assignedElements()) {
        const $option = $el as TSinchSegmentedIconControlOptionElement

        $option.checked = $option.disabled !== true && values.has($option.value)
      }
    } else {
      const value = getFirstCsvValue(csv)

      for (const $el of this.#$slot.assignedElements()) {
        const $option = $el as TSinchSegmentedIconControlOptionElement

        $option.checked = $option.disabled !== true && $option.value === value
      }
    }
  }
})

export type TSinchSegmentedIconControlElement = HTMLElement & {
  value: string,
  multiple: boolean,
}

export type TSinchSegmentedIconControlReact = TSinchElementReact<TSinchSegmentedIconControlElement> & {
  value: string,
  multiple?: boolean,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchSegmentedIconControlElement, CustomEvent<string>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control': TSinchSegmentedIconControlReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-icon-control': TSinchSegmentedIconControlElement,
  }
}
