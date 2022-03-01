import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-toggle', class extends HTMLElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
    this.#$label = shadowRoot.querySelector('label')!
    this.#$input.addEventListener('input', this.#onInput)
  }

  connectedCallback() {
    this.setAttribute('aria-label', 'toggle')
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text']
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set labeled(isLabeled: boolean) {
    updateBooleanAttribute(this, 'labeled', isLabeled)
  }

  get labeled() {
    return getBooleanAttribute(this, 'labeled')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set text(value: string | null) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', null)
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$label.textContent = newVal

        break
      }
      case 'checked': {
        this.#$input.checked = isAttrTrue(newVal)

        break
      }
      case 'disabled': {
        this.#$input.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  #onInput = (e: Event) => {
    e.stopPropagation()

    const isChecked = this.#$input.checked

    this.#$input.checked = this.checked

    this.dispatchEvent(
      new CustomEvent('change', { detail: isChecked, bubbles: true })
    )
  }
})

export type TSinchToggleElement = HTMLElement & {
  checked: boolean,
  small: boolean,
  labeled: boolean,
  disabled: boolean,
  text: string | null,
  focus(): void,
  blur(): void,
}

export type TSinchToggleReact = TSinchElementReact<TSinchToggleElement> & {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  onChange: (e: SyntheticEvent<TSinchToggleElement, CustomEvent<boolean>>) => void,
  onFocus?: (e: FocusEvent<TSinchToggleElement>) => void,
  onBlur?: (e: FocusEvent<TSinchToggleElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-toggle': TSinchToggleReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-toggle': TSinchToggleElement,
  }
}
