import {
  defineCustomElement,
  getBooleanAttribute,
  getEventHandler,
  getAttribute,
  getLiteralAttribute,
  isAttrTrue,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'

const buttonTypes = ['primary', 'secondary', 'cta', 'destructive'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends HTMLElement {
  $button: HTMLButtonElement
  $text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('button')!
    this.$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.$button.addEventListener('click', this.onClick)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onClick)
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$text.textContent = newVal

        break
      }
      case 'disabled': {
        this.$button.disabled = isAttrTrue(newVal)

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

  set disabled(isDisabled: boolean | undefined) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set small(isSmall: boolean | undefined) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  onClick = (e: MouseEvent) => {
    getEventHandler(this, 'onClick')?.()

    this.dispatchEvent(
      new CustomEvent('click', { bubbles: true })
    )

    e.stopPropagation()
  }
})

type TSinchButtonType = typeof buttonTypes[number]

export type TSinchButton = {
  type: TSinchButtonType,
  text: string,
  disabled?: boolean,
  small?: boolean,
  onClick: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button': TSinchButton,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': HTMLElement & TSinchButton,
  }
}
