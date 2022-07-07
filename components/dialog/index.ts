import dialogPolyfill from 'dialog-polyfill'
import '../icon-button'
import '../icons/close'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getRect,
  isAttrTrue,
  updateAttribute,
  getReactEventHandler,
  NectaryElement,
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

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$dialog = shadowRoot.querySelector('dialog')!
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$caption = shadowRoot.querySelector('#caption')!

    dialogPolyfill.registerDialog(this.#$dialog)
  }

  static get observedAttributes() {
    return ['caption', 'open']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        this.#$caption.textContent = newVal

        break
      }
      case 'open': {
        if (this.#isConnected) {
          this.#setOpen(isAttrTrue(newVal))
        }

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

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$closeButton.addEventListener('click', this.#onCloseClick)
    this.addEventListener('close', this.#onCloseReactHandler)
    this.addEventListener('click', this.#onBackdropClick)
    this.#$dialog.addEventListener('cancel', this.#onCancel)
    this.#isConnected = true

    if (getBooleanAttribute(this, 'open')) {
      this.#setOpen(true)
    }
  }

  disconnectedCallback() {
    this.#$closeButton.removeEventListener('click', this.#onCloseClick)
    this.removeEventListener('close', this.#onCloseReactHandler)
    this.removeEventListener('click', this.#onBackdropClick)
    this.#$dialog.removeEventListener('cancel', this.#onCancel)
    this.#isConnected = false
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    this.#dispatchCloseEvent()
  }

  #onCloseClick = (e: MouseEvent) => {
    e.stopPropagation()
    this.#dispatchCloseEvent()
  }

  #onBackdropClick = (e: MouseEvent) => {
    const rect = this.dialogRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      this.#dispatchCloseEvent()
    }
  }

  #onCloseReactHandler = () => {
    getReactEventHandler(this, 'onClose')?.()
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent(
        'close',
        { bubbles: true }
      )
    )
  }

  #setOpen(isOpen: boolean) {
    if (isOpen) {
      if (!getBooleanAttribute(this.#$dialog, 'open')) {
        (this.#$dialog as any).showModal()
      }
    } else {
      (this.#$dialog as any).close?.()
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
