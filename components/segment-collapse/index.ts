import '../icons/expand-less'
import '../icons/expand-more'
import '../icon-button'
import {
  defineCustomElement,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentExpandElement, TSinchSegmentExpandReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segment-collapse', class extends NectaryElement {
  #$button: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
  }

  connectedCallback() {
    this.setAttribute('role', 'checkbox')
    this.#$button.addEventListener('click', this.#onClick)
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onClick)
    this.removeEventListener('-change', this.#onChangeReactHandler)
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        updateExplicitBooleanAttribute(this, 'aria-checked', isAttrTrue(newVal))

        break
      }
    }
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  set value(isChecked: boolean) {
    updateBooleanAttribute(this, 'value', isChecked)
  }

  get value() {
    return getBooleanAttribute(this, 'value')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onClick = () => {
    const detail = !this.value

    this.dispatchEvent(
      new CustomEvent('change', { detail, bubbles: true })
    )
    this.dispatchEvent(
      new CustomEvent('-change', { detail })
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment-collapse': TSinchSegmentExpandReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segment-collapse': TSinchSegmentExpandElement,
  }
}
