import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent } from 'react'

export const isSegmentedControlOptionElement = (element: EventTarget | Element | null): element is TSinchSegmentedControlOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-SEGMENTED-CONTROL-OPTION'
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-control-option', class extends NectaryElement {
  $button: HTMLButtonElement
  $label: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('#button')!
    this.$label = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
    this.$button.addEventListener('click', this.#onClick)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text', 'value']
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

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$label.textContent = newVal

        break
      }
      case 'checked': {
        updateAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        this.$button.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  focus() {
    this.$button.focus()
  }

  blur() {
    this.$button.blur()
  }

  #onClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('change', { bubbles: true, detail: this.value })
    )
  }
})

export type TSinchSegmentedControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  checked: boolean,
  text: string,
  focus(): void,
  blur(): void,
}

export type TSinchSegmentedControlOptionReact = TSinchElementReact<TSinchSegmentedControlOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  'aria-label': string,
  onFocus?: (e: FocusEvent<TSinchSegmentedControlOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchSegmentedControlOptionElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-control-option': TSinchSegmentedControlOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-control-option': TSinchSegmentedControlOptionElement,
  }
}
