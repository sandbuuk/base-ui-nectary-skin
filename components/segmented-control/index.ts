import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentedControlElement, TSinchSegmentedControlReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-control', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tablist')
    this.#$slot.addEventListener('option-change', this.#onOptionChange)
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#$slot.removeEventListener('option-change', this.#onOptionChange)
    this.#$slot.removeEventListener('slotchange', this.#onSlotChange)
    this.removeEventListener('-change', this.#onChangeReactHandler)
  }

  static get observedAttributes() {
    return ['value']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

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

    const detail = (e as CustomEvent).detail

    this.dispatchEvent(
      new CustomEvent('-change', { detail })
    )
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'data-checked', isChecked)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

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
