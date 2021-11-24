import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getEventHandler,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-checkbox', class extends HTMLElement {
  $input: HTMLInputElement
  $label: HTMLLabelElement
  onChange!: (isChecked: boolean) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = shadowRoot.querySelector('input')!
    this.$label = shadowRoot.querySelector('label')!
  }

  connectedCallback() {
    this.$input.addEventListener('input', this.onInput)
    this.$input.addEventListener('focus', this.onInputFocus)
    this.$input.addEventListener('blur', this.onInputBlur)
  }

  disconnectedCallback() {
    this.$input.removeEventListener('input', this.onInput)
    this.$input.removeEventListener('focus', this.onInputFocus)
    this.$input.removeEventListener('blur', this.onInputBlur)
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text']
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set indeterminate(isIndeterminate: boolean) {
    updateBooleanAttribute(this, 'indeterminate', isIndeterminate)
  }

  get indeterminate() {
    return getBooleanAttribute(this, 'indeterminate')
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
        this.$input.checked = isAttrTrue(newVal)

        break
      }
      case 'disabled': {
        this.$input.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  focus() {
    this.$input.focus()
  }

  blur() {
    this.$input.blur()
  }

  onInput = (e: Event) => {
    getEventHandler(this, 'onChange')?.(this.$input.checked)

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.$input.checked,
      })
    )

    e.stopPropagation()
  }

  onInputFocus = (e: Event) => {
    getEventHandler(this, 'onFocus')?.()

    this.dispatchEvent(
      new CustomEvent('focus')
    )

    e.stopPropagation()
  }

  onInputBlur = (e: Event) => {
    getEventHandler(this, 'onBlur')?.()

    this.dispatchEvent(
      new CustomEvent('blur')
    )

    e.stopPropagation()
  }
})

type TSinchCheckboxElement = HTMLElement & {
  checked: boolean,
  indeterminate: boolean,
  disabled: boolean,
  text: string,
  focus(): void,
  blur(): void,
}

type TSinchCheckboxReact = TSinchElementReact<TSinchCheckboxElement> & {
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  text: string,
  onChange: (isChecked: boolean) => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckboxReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': TSinchCheckboxElement,
  }
}
