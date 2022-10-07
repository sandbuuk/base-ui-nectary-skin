import '../pop'
import {
  defineCustomElement,
  getBooleanAttribute,
  getLiteralAttribute,
  updateLiteralAttribute,
  updateBooleanAttribute,
  NectaryElement,
  updateAttribute,
  getReactEventHandler,
} from '../utils'
import templateHTML from './template.html'
import { assertOrientation, getPopOrientation, orientationValues } from './utils'
import type { TSinchPopElement } from '../pop/types'
import type { TSinchPopoverElement, TSinchPopoverOrientation, TSinchPopoverReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-popover', class extends NectaryElement {
  #$pop: TSinchPopElement
  #controller: AbortController | null = null
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$pop = shadowRoot.querySelector('#pop')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#$pop.addEventListener('-close', this.#onClose, { signal })
    this.addEventListener('-close', this.#onCloseReactHandler, { signal })

    updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))
  }

  disconnectedCallback() {
    this.#controller!.abort()
  }

  #onClose = () => {
    this.#dispatchCloseEvent()
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'onClose')?.()
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent('-close')
    )
  }

  static get observedAttributes() {
    return ['orientation', 'open', 'modal']
  }

  set modal(isModal: boolean) {
    updateBooleanAttribute(this, 'modal', isModal)
  }

  get modal(): boolean {
    return getBooleanAttribute(this, 'modal')
  }

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom-left')
  }

  set orientation(value: TSinchPopoverOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get popoverRect() {
    return this.#$pop.popoverRect
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'orientation': {
        assertOrientation(newVal)

        updateAttribute(this.#$pop, 'orientation', getPopOrientation(newVal))

        break
      }

      default: {
        updateAttribute(this.#$pop, name, newVal)
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-popover': TSinchPopoverReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-popover': TSinchPopoverElement,
  }
}
