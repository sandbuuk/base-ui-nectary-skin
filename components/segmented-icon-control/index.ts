import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  unpackCsv,
  getFirstCsvValue,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
  getTargetByAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentedIconControlElement, TSinchSegmentedIconControlReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-icon-control', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'tablist')
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.#$slot.addEventListener('keydown', this.#onOptionKeydown, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }
    }
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

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target === null || getBooleanAttribute(target, 'disabled')) {
      return
    }

    const value = getAttribute(target, 'value', '')
    const detail = this.multiple
      ? updateCsv(this.value, value, !getBooleanAttribute(target, 'data-checked'))
      : value

    this.dispatchEvent(
      new CustomEvent('-change', { detail })
    )
  }

  #onOptionKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()

        const target = getTargetByAttribute(e, 'value')

        if (target !== null) {
          target.click()
        }
      }
    }
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

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-segmented-icon-control': TSinchSegmentedIconControlElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control': TSinchSegmentedIconControlReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control': TSinchSegmentedIconControlReact,
    }
  }
}
