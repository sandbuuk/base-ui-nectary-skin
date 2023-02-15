import '../icon-button'
import '../icon'
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
  getCssVar,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDialogCloseDetail, TSinchDialogElement, TSinchDialogReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-dialog', class extends NectaryElement {
  #$iconClose: HTMLElement
  #$dialog: HTMLDialogElement
  #$closeButton: HTMLButtonElement
  #$caption: HTMLElement
  #controller: AbortController | null = null

  #prevOverflowValue: string = ''

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$dialog = shadowRoot.querySelector('dialog')!
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$iconClose = shadowRoot.querySelector('#icon-close')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'dialog')
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$closeButton.addEventListener('click', this.#onCloseClick, options)
    this.#$dialog.addEventListener('mousedown', this.#onBackdropClick, options)
    this.#$dialog.addEventListener('cancel', this.#onCancel, options)
    this.addEventListener('-close', this.#onCloseReactHandler, options)

    updateAttribute(this.#$iconClose, 'name', getCssVar(this, '--sinch-dialog-icon-close'))

    // React updates attributes BEFORE connecting to the DOM
    // Angular updates attributes AFTER connecting to the DOM
    this.#setOpen(getBooleanAttribute(this, 'open'))
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#setOpen(false)
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
    this.#dispatchCloseEvent('escape')
  }

  #onCloseClick = () => {
    this.#dispatchCloseEvent('close')
  }

  #onBackdropClick = (e: MouseEvent) => {
    if (e.target !== this.#$dialog) {
      return
    }

    const rect = this.dialogRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      this.#dispatchCloseEvent('backdrop')
    }
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'onClose')?.(e)
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent(detail: TSinchDialogCloseDetail) {
    this.dispatchEvent(
      new CustomEvent('-close', { detail })
    )
  }

  #setOpen(shouldOpen: boolean) {
    if (shouldOpen) {
      if (this.isConnected && !getBooleanAttribute(this.#$dialog, 'open')) {
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
