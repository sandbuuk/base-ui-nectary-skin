import dialogPolyfill from 'dialog-polyfill'
import '../icon-button'
import '../icons/close'
import '../stop-events'
import '../title'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getRect,
  isAttrTrue,
  updateAttribute,
  getReactEventHandler,
  NectaryElement,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDialogElement, TSinchDialogReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-dialog', class extends NectaryElement {
  #$dialog: HTMLDialogElement
  #$closeButton: HTMLButtonElement
  #$caption: HTMLElement
  #isConnected = false
  #prevOverflowValue: string = ''

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$dialog = shadowRoot.querySelector('dialog')!
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$caption = shadowRoot.querySelector('#caption')!

    dialogPolyfill.registerDialog(this.#$dialog)
  }

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$closeButton.addEventListener('click', this.#onCloseClick)
    this.#$dialog.addEventListener('mousedown', this.#onBackdropClick)
    this.#$dialog.addEventListener('cancel', this.#onCancel)
    this.addEventListener('-close', this.#onCloseReactHandler)
    this.#isConnected = true

    // React updates attributes BEFORE connecting to the DOM
    // Angular updates attributes AFTER connecting to the DOM
    this.#setOpen(getBooleanAttribute(this, 'open'))
  }

  disconnectedCallback() {
    this.#$closeButton.removeEventListener('click', this.#onCloseClick)
    this.#$dialog.removeEventListener('mousedown', this.#onBackdropClick)
    this.#$dialog.removeEventListener('cancel', this.#onCancel)
    this.removeEventListener('-close', this.#onCloseReactHandler)

    this.#setOpen(false)
    this.#isConnected = false
  }

  static get observedAttributes() {
    return ['caption', 'open', 'close-aria-label']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
      case 'open': {
        const shouldOpen = isAttrTrue(newVal)

        this.#setOpen(shouldOpen)

        updateBooleanAttribute(this, 'open', shouldOpen)

        break
      }
      case 'close-aria-label': {
        updateAttribute(this.#$closeButton, 'aria-label', newVal)

        break
      }
    }
  }

  set caption(caption: string) {
    updateAttribute(this, 'caption', caption)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    this.#dispatchCloseEvent()
  }

  #onCloseClick = () => {
    this.#dispatchCloseEvent()
  }

  #onBackdropClick = (e: MouseEvent) => {
    if (e.target !== this.#$dialog) {
      return
    }

    const rect = this.dialogRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      this.#dispatchCloseEvent()
    }
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

  #setOpen(shouldOpen: boolean) {
    if (shouldOpen) {
      if (this.#isConnected && !getBooleanAttribute(this.#$dialog, 'open')) {
        this.#prevOverflowValue = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        this.#$dialog.showModal()
      }
    } else {
      this.#$dialog.close?.()
      document.body.style.overflow = this.#prevOverflowValue
    }
  }

  get dialogRect() {
    return getRect(this.#$dialog)
  }

  get closeButtonRect() {
    return getRect(this.#$closeButton)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dialog': TSinchDialogReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dialog': TSinchDialogElement,
  }
}
