import dialogPolyfill from 'dialog-polyfill'
import {
  defineCustomElement,
  getBooleanAttribute,
  getLiteralAttribute,
  getRect,
  isAttrTrue,
  updateLiteralAttribute,
  getReactEventHandler,
} from '../utils'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const orientationValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-popover', class extends HTMLElement {
  #$target: HTMLButtonElement
  #$dialog: HTMLElement
  #isConnected = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$dialog = shadowRoot.querySelector('#dialog')!

    dialogPolyfill.registerDialog(this.#$dialog)
  }

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel)
    this.#$dialog.addEventListener('click', this.#onBackdropClick)
    this.addEventListener('close', this.#onCloseReactHandler)
    this.#isConnected = true

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    } else {
      this.#onCollapse()
    }
  }

  disconnectedCallback() {
    this.#$dialog.removeEventListener('cancel', this.#onCancel)
    this.#$dialog.removeEventListener('click', this.#onBackdropClick)
    this.removeEventListener('close', this.#onCloseReactHandler)
    this.#isConnected = false
  }

  static get observedAttributes() {
    return ['open', 'orientation']
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom-right')
  }

  set orientation(value: TSinchPopoverOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get popoverRect() {
    return getRect(this.#$dialog)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'open': {
        if (this.#isConnected) {
          if (isAttrTrue(newVal)) {
            this.#onExpand()
          } else {
            this.#onCollapse()
          }
        }

        break
      }

      case 'orientation': {
        if (this.#isOpen()) {
          this.#updateOrientation()
        }
      }
    }
  }

  #onExpand() {
    this.#$target.setAttribute('aria-expanded', 'true')

    if (!this.#isOpen()) {
      (this.#$dialog as any).showModal()
    }

    this.#updateOrientation()
  }

  #onCollapse() {
    this.#$target.setAttribute('aria-expanded', 'false')

    if (this.#isOpen()) {
      (this.#$dialog as any).close?.()
    }
  }

  #isOpen() {
    return this.#isConnected && getBooleanAttribute(this.#$dialog, 'open')
  }

  #updateOrientation() {
    this.#$dialog.style.transform = `initial`
    this.#$dialog.style.width = `max-content`

    const buttonRect = this.#$target.getBoundingClientRect()
    const modalRect = this.#$dialog.getBoundingClientRect()
    const width = Math.max(modalRect.width, buttonRect.width)
    const widthDiff = Math.max(buttonRect.width - modalRect.width, 0)
    let leftOffset = 0
    let topOffset = 0

    const orient = this.orientation

    if (orient === 'bottom-right' || orient === 'top-right') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, buttonRect.x - modalRect.x + widthDiff * 0.5))
    }

    if (orient === 'bottom-left' || orient === 'top-left') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, buttonRect.x + buttonRect.width - modalRect.x - modalRect.width - widthDiff * 0.5))
    }

    if (orient === 'bottom-left' || orient === 'bottom-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, buttonRect.y + buttonRect.height - modalRect.y + 8))
    }

    if (orient === 'top-left' || orient === 'top-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, buttonRect.y - modalRect.y - modalRect.height - 8))
    }

    this.#$dialog.style.transform = `translateX(${leftOffset}px) translateY(${topOffset}px)`
    this.#$dialog.style.width = `${width}px`
  }

  #onBackdropClick = (e: MouseEvent) => {
    const rect = this.popoverRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      this.#dispatchCloseEvent()
    }
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    this.#dispatchCloseEvent()
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
})

export type TSinchPopoverOrientation = typeof orientationValues[number]

export type TSinchPopoverElement = HTMLElement & {
  orientation: TSinchPopoverOrientation,
  readonly popoverRect: TRect,
}

export type TSinchPopoverReact = TSinchElementReact<TSinchPopoverElement> & {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchPopoverElement, CustomEvent<void>>) => void,
}

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
