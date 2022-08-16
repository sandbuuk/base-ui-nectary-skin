import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCsvSet,
  getFirstCsvValue,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentedIconControlElement, TSinchSegmentedIconControlReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-icon-control', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tablist')
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
    this.#$slot.addEventListener('option-change', this.#onOptionChange)
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#$slot.removeEventListener('slotchange', this.#onSlotChange)
    this.#$slot.removeEventListener('option-change', this.#onOptionChange)
    this.removeEventListener('-change', this.#onChangeReactHandler)
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
    if (oldVal === newVal) {
      return
    }

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

    const $elem = (e.target) as Element
    const value = (e as CustomEvent).detail
    const detail = this.multiple
      ? updateCsv(this.value, value, !getBooleanAttribute($elem, 'checked'))
      : value

    this.dispatchEvent(
      new CustomEvent('change', { detail, bubbles: true })
    )
    this.dispatchEvent(
      new CustomEvent('-change', { detail })
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

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

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
