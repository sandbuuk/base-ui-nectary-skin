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
import type { TSinchSegmentedIconControlOption } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-icon-control-option', class extends NectaryElement {
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'tab')
    this.addEventListener('focus', this.#onButtonFocus, options)
    this.addEventListener('blur', this.#onButtonBlur, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

    this.#updateTabIndex()
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['data-checked', 'disabled']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        this.#updateTabIndex()

        updateBooleanAttribute(this, name, isAttrTrue(newVal))

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

  get focusable() {
    return true
  }

  #updateTabIndex() {
    this.tabIndex = this.disabled ? -1 : 0
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
  interface NectaryComponentMap {
    'sinch-segmented-icon-control-option': TSinchSegmentedIconControlOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-icon-control-option': NectaryComponentVanilla<'sinch-segmented-icon-control-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control-option': NectaryComponentReact<'sinch-segmented-icon-control-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control-option': NectaryComponentReact<'sinch-segmented-icon-control-option'>,
    }
  }
}
