import '../icon'
import '../rich-text'
import '../text'
import '../title'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
  getCssVar,
} from '../utils'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchInlineAlertElement, TSinchInlineAlertReact, TSinchInlineAlertType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-inline-alert', class extends NectaryElement {
  #$icon: HTMLElement
  #$text: HTMLElement
  #$caption: HTMLElement
  #$closeWrapper: HTMLElement
  #$closeSlot: HTMLSlotElement
  #$actionWrapper: HTMLElement
  #$actionSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$icon = shadowRoot.querySelector('#icon')!
    this.#$text = shadowRoot.querySelector('#text')!
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$closeWrapper = shadowRoot.querySelector('#close')!
    this.#$closeSlot = shadowRoot.querySelector('slot[name="close"]')!
    this.#$actionWrapper = shadowRoot.querySelector('#action')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('aria-atomic', 'true')
    this.setAttribute('aria-live', 'polite')
    this.#$closeSlot.addEventListener('slotchange', this.#onCloseSlotChange)
    this.#$actionSlot.addEventListener('slotchange', this.#onActionSlotChange)

    this.#onCloseSlotChange()
    this.#onActionSlotChange()
    this.#updateIcon()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#$closeSlot.removeEventListener('slotchange', this.#onCloseSlotChange)
    this.#$actionSlot.removeEventListener('slotchange', this.#onActionSlotChange)
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchInlineAlertType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get caption() {
    return getAttribute(this, 'caption', '')
  }

  set caption(value: string) {
    updateAttribute(this, 'caption', value)
  }

  static get observedAttributes() {
    return ['text', 'caption', 'type']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        this.#updateIcon()

        break
      }

      case 'text': {
        updateAttribute(this.#$text, 'text', newVal)

        break
      }

      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
    }
  }

  #updateIcon() {
    if (!this.isConnected) {
      return
    }

    updateAttribute(this.#$icon, 'name', getCssVar(this, `--sinch-inline-alert-icon-${this.type}`))
  }

  #onCloseSlotChange = () => {
    setClass(this.#$closeWrapper, 'empty', this.#$closeSlot.assignedElements().length === 0)
  }

  #onActionSlotChange = () => {
    setClass(this.#$actionWrapper, 'empty', this.#$actionSlot.assignedElements().length === 0)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-inline-alert': TSinchInlineAlertReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-inline-alert': TSinchInlineAlertElement,
  }
}
