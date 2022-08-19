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
import type { TSinchActionMenuOptionElement, TSinchActionMenuOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu-option', class ActionMenuOption extends NectaryElement {
  #$wrapper: HTMLButtonElement
  #$content: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
    this.#$wrapper.addEventListener('mousedown', this.#onMouseDown)
    this.addEventListener('-click', this.#onClickReactHandler)
  }

  disconnectedCallback() {
    this.#$wrapper.removeEventListener('mousedown', this.#onMouseDown)
    this.removeEventListener('-click', this.#onClickReactHandler)
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$content.textContent = newVal

        break
      }

      case 'disabled': {
        updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))

        break
      }
    }
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

  click() {
    this.dispatchEvent(
      new CustomEvent('-click')
    )
  }

  #onMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    this.click()
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu-option': TSinchActionMenuOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-action-menu-option': TSinchActionMenuOptionElement,
  }
}
