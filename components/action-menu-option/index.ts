import '../text'
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
import type { TSinchActionMenuOptionElement, TSinchActionMenuOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu-option', class ActionMenuOption extends NectaryElement {
  #$wrapper: HTMLButtonElement
  #$content: HTMLElement
  #controller = new AbortController()

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    const { signal } = this.#controller

    this.setAttribute('role', 'option')
    this.#$wrapper.addEventListener('mousedown', this.#onMouseDown, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
  }

  disconnectedCallback() {
    this.#controller.abort()
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'data-selected']
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

      case 'data-selected': {
        const isDisabled = getBooleanAttribute(this, 'disabled')

        if (isDisabled) {
          updateBooleanAttribute(this, 'aria-selected', false)
        } else {
          updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))
        }

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
    this.#dispatchClickEvent()
  }

  #onMouseDown = () => {
    this.#dispatchClickEvent()
  }

  #dispatchClickEvent() {
    this.dispatchEvent(
      new CustomEvent('-click')
    )
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
