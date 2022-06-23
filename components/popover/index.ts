import dialogPolyfill from 'dialog-polyfill'
import {
  defineCustomElement,
  getBooleanAttribute,
  getLiteralAttribute,
  getRect,
  isAttrTrue,
  updateLiteralAttribute,
  getReactEventHandler,
  updateBooleanAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const orientationValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

const POPOVER_VERTICAL_OFFSET = 4

defineCustomElement('sinch-popover', class extends NectaryElement {
  #$target: HTMLButtonElement
  #$dialog: HTMLDialogElement
  #isConnected = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

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

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
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

        break
      }
    }
  }

  #onExpand() {
    this.#$target.setAttribute('aria-expanded', 'true')

    if (!this.#isOpen()) {
      this.#$dialog.showModal()
    }

    this.#updateOrientation()
  }

  #onCollapse() {
    this.#$target.setAttribute('aria-expanded', 'false')

    if (this.#isOpen()) {
      this.#$dialog.close?.()
    }
  }

  #isOpen() {
    return this.#isConnected && getBooleanAttribute(this.#$dialog, 'open')
  }

  #updateOrientation() {
    this.#$dialog.style.transform = `initial`
    this.#$dialog.style.width = `max-content`

    const targetRect = this.#$target.getBoundingClientRect()
    const modalRect = this.#$dialog.getBoundingClientRect()
    let leftOffset = 0
    let topOffset = 0

    const orient = this.orientation

    if (orient === 'bottom-right' || orient === 'top-right') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, targetRect.x - modalRect.x))
    }

    if (orient === 'bottom-left' || orient === 'top-left') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, targetRect.x + targetRect.width - modalRect.x - modalRect.width))
    }

    if (orient === 'bottom-left' || orient === 'bottom-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, targetRect.y + targetRect.height - modalRect.y + POPOVER_VERTICAL_OFFSET))
    }

    if (orient === 'top-left' || orient === 'top-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, targetRect.y - modalRect.y - modalRect.height - POPOVER_VERTICAL_OFFSET))
    }

    this.#$dialog.style.transform = `translateX(${leftOffset}px) translateY(${topOffset}px)`
    this.#$dialog.style.width = `${modalRect.width}px`
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
  open: boolean,
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
