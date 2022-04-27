import dialogPolyfill from 'dialog-polyfill'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getRect,
  isAttrTrue,
  updateAttribute,
} from '../utils'
import '../icon-button'
import '../icon/close'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

const getReactEventHandler = ($element: HTMLElement, handlerName: string): ((arg?: any) => void) | null => {
  // https://github.com/facebook/react/issues/7901
  for (const key in $element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-ignore
      return $element[key][handlerName]
    }
  }

  return null
}

defineCustomElement('sinch-dialog', class extends HTMLElement {
  #$dialog: HTMLElement
  #$closeButton: HTMLButtonElement
  #$caption: HTMLElement
  #isConected = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

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
        if (this.#isConected) {
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

    this.#isConected = true

    if (getBooleanAttribute(this, 'open')) {
      this.#setOpen(true)
    }
  }

  disconnectedCallback() {
    this.#$closeButton.removeEventListener('click', this.#onCloseClick)
    this.removeEventListener('close', this.#onCloseReactHandler)
    this.removeEventListener('click', this.#onBackdropClick)
    this.#$dialog.removeEventListener('cancel', this.#onCancel)

    this.#isConected = false
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
    e.stopPropagation()

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
      (this.#$dialog as any).showModal()
    } else {
      (this.#$dialog as any).close()
    }
  }

  get dialogRect() {
    return getRect(this.#$dialog)
  }

  get closeButtonRect() {
    return getRect(this.#$closeButton)
  }
})

type TSinchDialogElement = HTMLElement & {
  caption: string,
  readonly dialogRect: TRect,
  readonly closeButtonRect: TRect,
}

type TSinchDialogReact = TSinchElementReact<TSinchDialogElement> & {
  open: boolean,
  caption: string,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchDialogElement, CustomEvent<void>>) => void,
}

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
