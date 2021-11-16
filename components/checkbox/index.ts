import { defineCustomElement, getEventHandler } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-checkbox', class extends HTMLElement {
  $input: HTMLInputElement
  $label: HTMLLabelElement
  onChange!: (isChecked: boolean) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = shadowRoot.querySelector('input')!
    this.$input.addEventListener('input', this.onInput)

    this.$label = shadowRoot.querySelector('label')!
  }

  disconnectedCallback() {
    this.$input.removeEventListener('click', this.onInput)
  }

  static get observedAttributes() {
    return ['checked', 'indeterminate', 'disabled', 'text']
  }

  set checked(isChecked: boolean) {
    if (isChecked) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  get checked(): boolean {
    const attrValue = this.getAttribute('checked')

    return attrValue === '' || Boolean(attrValue)
  }

  set indeterminate(isIndeterminate: boolean) {
    if (isIndeterminate) {
      this.setAttribute('indeterminate', '')
    } else {
      this.removeAttribute('indeterminate')
    }
  }

  get indeterminate(): boolean {
    const attrValue = this.getAttribute('indeterminate')

    return attrValue === '' || Boolean(attrValue)
  }

  set disabled(isDisabled: boolean) {
    if (isDisabled) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled(): boolean {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
  }

  set text(value: string) {
    this.setAttribute('text', value)
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  attributeChangedCallback(name: string, _: boolean | string, newVal: boolean | string) {
    switch (name) {
      case 'text': {
        this.$label.textContent = String(newVal)

        break
      }
      case 'checked': {
        this.$input.checked = newVal === '' || Boolean(newVal)

        break
      }
      case 'disabled': {
        this.$input.disabled = newVal === '' || Boolean(newVal)

        break
      }
    }
  }

  onInput = (e: Event) => {
    const onChange = getEventHandler(this, 'onChange')

    if (onChange != null) {
      onChange(this.$input.checked)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.$input.checked,
      })
    )

    this.$input.checked = this.checked

    e.stopPropagation()
  }
})

export type TSinchCheckbox = {
  checked: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  text: string,
  onChange: (isChecked: boolean) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckbox,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': HTMLElement & TSinchCheckbox,
  }
}
