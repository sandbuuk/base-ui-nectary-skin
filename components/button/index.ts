import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  isAttrTrue,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const buttonTypes = ['primary', 'secondary', 'cta-primary', 'cta-secondary', 'destructive'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'button')
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
    }
  }

  set type(value: TSinchButtonType) {
    updateLiteralAttribute(this, buttonTypes, 'type', value)
  }

  get type(): TSinchButtonType {
    return getLiteralAttribute(this, buttonTypes, 'type', 'primary')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }
})

export type TSinchButtonType = typeof buttonTypes[number]

export type TSinchButtonElement = HTMLElement & {
  type: TSinchButtonType,
  text: string,
  disabled: boolean,
  small: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchButtonReact = TSinchElementReact<TSinchButtonElement> & {
  type: TSinchButtonType,
  text: string,
  'aria-label': string,
  disabled?: boolean,
  small?: boolean,
  onClick: (e: MouseEvent<TSinchButtonElement>) => void,
  onFocus?: (e: FocusEvent<TSinchButtonElement>) => void,
  onBlur?: (e: FocusEvent<TSinchButtonElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button': TSinchButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': TSinchButtonElement,
  }
}
