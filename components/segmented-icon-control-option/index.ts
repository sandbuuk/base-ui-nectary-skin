import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-icon-control-option', class extends NectaryElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
    this.#$button.addEventListener('click', this.#onClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'value']
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value() {
    return getAttribute(this, 'value', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: this.value,
      })
    )
  }
})

export type TSinchSegmentedIconControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  checked: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchSegmentedIconControlOptionReact = TSinchElementReact<TSinchSegmentedIconControlOptionElement> & {
  value: string,
  disabled?: boolean,
  'aria-label': string,
  onFocus?: (e: FocusEvent<TSinchSegmentedIconControlOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchSegmentedIconControlOptionElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control-option': TSinchSegmentedIconControlOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-icon-control-option': TSinchSegmentedIconControlOptionElement,
  }
}
