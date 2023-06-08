import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchProgressStepperItemElement, TSinchProgressStepperItemReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-progress-stepper-item', class extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: false })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['data-checked', 'text', 'invalid', 'data-status']
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
      case 'data-status': {
        this.tabIndex = newVal === 'inactive' ? -1 : 0

        break
      }
      case 'invalid': {
        updateBooleanAttribute(this, 'invalid', isAttrTrue(newVal))

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

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  get focusable() {
    return true
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper-item': TSinchProgressStepperItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-progress-stepper-item': TSinchProgressStepperItemElement,
  }
}
