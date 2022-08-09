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
  throttleAnimationFrame,
} from '../utils'
import templateHTML from './template.html'
import { orientationValues } from './utils'
import type { TSinchPopoverElement, TSinchPopoverOrientation, TSinchPopoverReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const POPOVER_OFFSET = 4

defineCustomElement('sinch-popover', class extends NectaryElement {
  #$target: HTMLButtonElement
  #$dialog: HTMLDialogElement
  #isConnected: boolean
  #resizeThrottle
  #prevOverflowValue: string = ''

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$dialog = shadowRoot.querySelector('#dialog')!
    this.#isConnected = false
    this.#resizeThrottle = throttleAnimationFrame(this.#updateOrientation)

    dialogPolyfill.registerDialog(this.#$dialog)
  }

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel)
    this.#$dialog.addEventListener('mousedown', this.#onBackdropClick)
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
    this.#$dialog.removeEventListener('mousedown', this.#onBackdropClick)
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
    if (this.#isOpen()) {
      return
    }

    this.#$target.setAttribute('aria-expanded', 'true')
    this.#$dialog.showModal()
    this.#updateOrientation()

    this.#prevOverflowValue = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', this.#onResize)
  }

  #onCollapse() {
    if (!this.#isOpen()) {
      return
    }

    this.#$target.setAttribute('aria-expanded', 'false')
    this.#$dialog.close?.()

    document.body.style.overflow = this.#prevOverflowValue
    window.removeEventListener('resize', this.#onResize)
    this.#resizeThrottle.cancel()
  }

  #isOpen() {
    return this.#isConnected && getBooleanAttribute(this.#$dialog, 'open')
  }

  #onResize = () => {
    this.#resizeThrottle.fn()
  }

  #updateOrientation = () => {
    this.#$dialog.style.width = 'fit-content'

    const targetRect = this.#$target.getBoundingClientRect()
    const modalRect = this.#$dialog.getBoundingClientRect()
    let leftPos = 0
    let topPos = 0

    const orient = this.orientation
    const shouldExpandWidthToTarget = orient === 'top' || orient === 'bottom'
    const largestWidth = Math.max(modalRect.width, targetRect.width)
    const resultWidth = shouldExpandWidthToTarget ? largestWidth : modalRect.width

    if (orient === 'bottom-right' || orient === 'top-right' || orient === 'top' || orient === 'bottom') {
      leftPos = Math.max(POPOVER_OFFSET, Math.min(targetRect.x, window.innerWidth - resultWidth - POPOVER_OFFSET))
    }

    if (orient === 'bottom-left' || orient === 'top-left') {
      leftPos = Math.max(POPOVER_OFFSET, targetRect.right - resultWidth)
    }

    if (orient === 'bottom-left' || orient === 'bottom-right' || orient === 'bottom') {
      topPos = Math.max(POPOVER_OFFSET, Math.min(targetRect.bottom + POPOVER_OFFSET, window.innerHeight - modalRect.height - POPOVER_OFFSET))
    }

    if (orient === 'top-left' || orient === 'top-right' || orient === 'top') {
      topPos = Math.max(POPOVER_OFFSET, targetRect.top - POPOVER_OFFSET - modalRect.height)
    }

    this.#$dialog.style.left = `${leftPos}px`
    this.#$dialog.style.top = `${topPos}px`
    this.#$dialog.style.width = `${resultWidth}px`
  }

  #onBackdropClick = (e: MouseEvent) => {
    if (e.target !== this.#$dialog) {
      return
    }

    const rect = this.popoverRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      e.stopPropagation()
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
