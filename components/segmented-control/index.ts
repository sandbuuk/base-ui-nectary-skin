import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-control', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #$sh: ShadowRoot

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$sh = shadowRoot
    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tablist')
    this.#$sh.addEventListener('change', this.#onOptionChange)
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  disconnectedCallback() {
    this.#$sh.removeEventListener('change', this.#onOptionChange)
    this.#$slot.removeEventListener('slotchange', this.#onSlotChange)
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

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal)

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    this.#dispatchChangeEvent((e as CustomEvent).detail)
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'checked', isChecked)
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value, bubbles: true })
    )
  }
})

export type TSinchSegmentedControlElement = HTMLElement & {
  value: string,
}

export type TSinchSegmentedControlReact = TSinchElementReact<TSinchSegmentedControlElement> & {
  value: string,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchSegmentedControlElement, CustomEvent<string>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-control': TSinchSegmentedControlReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-control': TSinchSegmentedControlElement,
  }
}
