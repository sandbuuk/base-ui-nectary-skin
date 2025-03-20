import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchActionMenuOption } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu-option', class ActionMenuOption extends NectaryElement {
  #$content: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'option')
    this.addEventListener('mousedown', this.#onMouseDown, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'data-selected']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$content.textContent = newVal

        break
      }

      case 'disabled': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'data-selected': {
        const isDisabled = getBooleanAttribute(this, 'disabled')

        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal) && !isDisabled)

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
  interface NectaryComponentMap {
    'sinch-action-menu-option': TSinchActionMenuOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-action-menu-option': NectaryComponentVanilla<'sinch-action-menu-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu-option': NectaryComponentReact<'sinch-action-menu-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu-option': NectaryComponentReact<'sinch-action-menu-option'>,
    }
  }
}
