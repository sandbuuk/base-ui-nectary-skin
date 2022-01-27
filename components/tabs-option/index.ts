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

export const isTabsOptionElement = (element: EventTarget | Element | null): element is TSinchTabsOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-TABS-OPTION'
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tabs-option', class extends HTMLElement {
  $input: HTMLInputElement
  $label: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = shadowRoot.querySelector('input')!
    this.$label = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.$input.addEventListener('change', this.onInput)
  }

  disconnectedCallback() {
    this.$input.removeEventListener('change', this.onInput)
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
        const isChecked = isAttrTrue(newVal)

        this.$input.checked = isChecked

        if (isChecked) {
          this.scrollIntoView({ block: 'nearest' })
        }

        break
      }
      case 'disabled': {
        this.$input.disabled = isAttrTrue(newVal)

        break
      }
      case 'value': {
        this.$input.value = newVal ?? ''

        break
      }
    }
  }

  focus() {
    this.$input.focus()
  }

  onInput = () => {
    this.$input.checked = false
    this.dispatchEvent(
      new CustomEvent('change', { bubbles: true, detail: this.value })
    )
  }
})

type TSinchTabsOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  checked: boolean,
  text: string,
  focus(): void,
}

type TSinchTabsOptionReact = TSinchElementReact<TSinchTabsOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs-option': TSinchTabsOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs-option': TSinchTabsOptionElement,
  }
}
