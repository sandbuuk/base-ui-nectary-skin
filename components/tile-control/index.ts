import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  unpackCsv,
  getFirstCsvValue,
  getIntegerAttribute,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
  updateIntegerAttribute,
  isAttrTrue,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTileControlElement, TSinchTileControlReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tile-control', class extends NectaryElement {
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
    return ['value', 'small', 'multiple']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }

      case 'small': {
        this.#onSmallChange()
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'multiple': {
        this.#onValueChange(this.value)
      }
    }
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple() {
    return getBooleanAttribute(this, 'multiple')
  }

  set cols(value: number) {
    updateIntegerAttribute(this, 'cols', value)
  }

  get cols() {
    return getIntegerAttribute(this, 'cols', 1)
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
    this.#onSmallChange()
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    const $elem = (e.target) as Element
    const value = (e as CustomEvent).detail
    const detail = this.multiple
      ? updateCsv(this.value, value, !getBooleanAttribute($elem, 'data-checked'))
      : value

    this.dispatchEvent(
      new CustomEvent('-change', { detail })
    )
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = unpackCsv(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && values.includes(getAttribute($option, 'value', ''))

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    } else {
      const value = getFirstCsvValue(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    }
  }

  #onSmallChange() {
    const isSmall = this.small

    for (const $opt of this.#$slot.assignedElements()) {
      updateBooleanAttribute($opt, 'data-small', isSmall)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-tile-control': TSinchTileControlElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tile-control': TSinchTileControlReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tile-control': TSinchTileControlReact,
    }
  }
}
