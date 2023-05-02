import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchRadioElement, TSinchRadioReact } from './types'
import type { TSinchRadioOptionElement } from '../radio-option/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.setAttribute('role', 'radiogroup')
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
    this.#$slot.addEventListener('keydown', this.#onOptionKeyDown)
    this.#$slot.addEventListener('option-change', this.#onOptionChange)
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#$slot.removeEventListener('slotchange', this.#onSlotChange)
    this.#$slot.removeEventListener('keydown', this.#onOptionKeyDown)
    this.#$slot.removeEventListener('option-change', this.#onOptionChange)
    this.removeEventListener('-change', this.#onChangeReactHandler)
  }

  static get observedAttributes() {
    return ['value', 'invalid']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
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

      case 'invalid': {
        this.#updateInvalid(isAttrTrue(newVal))

        break
      }
    }
  }

  #onOptionKeyDown = (e: Event) => {
    switch ((e as KeyboardEvent).code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()

        const $option = this.#getPrevOption()

        if ($option !== null) {
          $option.focus()
          this.#dispatchChangeEvent($option.value)
        }

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()

        const $option = this.#getNextOption()

        if ($option !== null) {
          $option.focus()
          this.#dispatchChangeEvent($option.value)
        }

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

  #onValueChange(value: string) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'checked', isChecked)
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value, bubbles: true })
    )
    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #getFirstOption(): TSinchRadioOptionElement | null {
    for (const $option of this.#$slot.assignedElements() as TSinchRadioOptionElement[]) {
      if ($option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getLastOption(): TSinchRadioOptionElement | null {
    for (const $option of (this.#$slot.assignedElements() as TSinchRadioOptionElement[]).reverse()) {
      if ($option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getNextOption(): TSinchRadioOptionElement | null {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption(): TSinchRadioOptionElement | null {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #getEnabledRadioElements(): TSinchRadioOptionElement[] {
    return (this.#$slot.assignedElements() as TSinchRadioOptionElement[]).filter((el) => el.disabled !== true)
  }

  #findSelectedOption(elements: readonly TSinchRadioOptionElement[]) {
    return elements.find((el) => el.checked) ?? null
  }

  #updateInvalid(isInvalid: boolean) {
    for (const opt of this.#$slot.assignedElements()) {
      updateBooleanAttribute(opt, 'data-invalid', isInvalid)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio': TSinchRadioReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-radio': TSinchRadioElement,
  }
}
