import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTileControlOptionElement, TSinchTileControlOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tile-control-option', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
    this.#$button.addEventListener('click', this.#onButtonClick)
    this.#$button.addEventListener('focus', this.#onButtonFocus)
    this.#$button.addEventListener('blur', this.#onButtonBlur)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
    this.#$button.removeEventListener('focus', this.#onButtonFocus)
    this.#$button.removeEventListener('blur', this.#onButtonBlur)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return ['data-checked', 'text', 'disabled']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

        break
      }
    }
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

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('option-change', { detail: this.value, bubbles: true })
    )
  }

  #onButtonFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onButtonBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tile-control-option': TSinchTileControlOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tile-control-option': TSinchTileControlOptionElement,
  }
}
