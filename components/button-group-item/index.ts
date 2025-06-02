import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchButtonGroupItem } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-group-item', class extends NectaryElement {
  #$sinchButton: NectaryComponentVanilla<'sinch-button-group-item'>
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$sinchButton = shadowRoot.querySelector('#sinch-button-element')!
  }

  static get observedAttributes() {
    return ['type', 'size', 'text', 'disabled', 'toggled']
  }

  attributeChangedCallback(name: (keyof NectaryComponentVanilla<'sinch-button'>), oldVal: string | null, newVal: string | null) {
    // Forward the props to the button
    updateAttribute(this.#$sinchButton, name, newVal)
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')

    const forwardEvent = (e: CustomEvent) => this.dispatchEvent(new CustomEvent(e.type, { ...e }))

    this.addEventListener('-click', (e) => this.#onClickReactHandler(e), { signal })
    this.addEventListener('-focus', () => this.#onFocusReactHandler(), { signal })
    this.addEventListener('-blur', () => this.#onBlurReactHandler(), { signal })
    this.#$sinchButton.addEventListener('-click', (e) => forwardEvent(e), { signal })
    this.#$sinchButton.addEventListener('-focus', (e) => forwardEvent(e), { signal })
    this.#$sinchButton.addEventListener('-blur', (e) => forwardEvent(e), { signal })
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

  set toggled(isToggled: boolean) {
    updateBooleanAttribute(this, 'toggled', isToggled)
  }

  get toggled() {
    return getBooleanAttribute(this, 'toggled')
  }

  get focusable() {
    return true
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-button-group-item': TSinchButtonGroupItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group-item': NectaryComponentVanilla<'sinch-button-group-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group-item': NectaryComponentReact<'sinch-button-group-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-button-group-item': NectaryComponentReact<'sinch-button-group-item'>,
    }
  }
}
