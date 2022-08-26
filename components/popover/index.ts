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
  #$target: HTMLElement
  #$dialog: HTMLDialogElement
  #isConnected: boolean
  #resizeThrottle
  #originalOverflowValue: string = ''
  #$targetSlot: HTMLSlotElement
  #$targetOpenSlot: HTMLSlotElement
  #$targetOpenWrapper: HTMLElement
  #targetActiveElement: HTMLElement | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$dialog = shadowRoot.querySelector('#dialog')!
    this.#$targetSlot = shadowRoot.querySelector('slot[name="target"]')!
    this.#$targetOpenSlot = shadowRoot.querySelector('slot[name="target-open"]')!
    this.#$targetOpenWrapper = shadowRoot.querySelector('#target-open')!
    this.#isConnected = false
    this.#resizeThrottle = throttleAnimationFrame(this.#updateOrientation)

    dialogPolyfill.registerDialog(this.#$dialog)

    /* Disable polyfill focus trap behavior */
    // @ts-ignore
    dialogPolyfill.dm.handleFocus_ = function() {}
  }

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel)
    this.#$dialog.addEventListener('mousedown', this.#onBackdropMouseDown)
    this.addEventListener('-close', this.#onCloseReactHandler)
    this.#isConnected = true

    // React updates attributes BEFORE connecting to the DOM
    // Angular updates attributes AFTER connecting to the DOM
    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    } else {
      this.#onCollapse()
    }
  }

  disconnectedCallback() {
    this.#$dialog.removeEventListener('cancel', this.#onCancel)
    this.#$dialog.removeEventListener('mousedown', this.#onBackdropMouseDown)
    this.removeEventListener('-close', this.#onCloseReactHandler)

    this.#onCollapse()
    this.#isConnected = false
  }

  static get observedAttributes() {
    return ['modal', 'orientation', 'open']
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
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom')
  }

  set orientation(value: TSinchPopoverOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get popoverRect() {
    return getRect(this.#$dialog)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'open': {
        if (isAttrTrue(newVal)) {
          this.#onExpand()
        } else {
          this.#onCollapse()
        }

        updateBooleanAttribute(this, 'open', isAttrTrue(newVal))

        break
      }

      case 'orientation': {
        if (this.#isOpen()) {
          this.#updateOrientation()
        }

        break
      }

      case 'modal': {
        if (this.#isOpen()) {
          this.#onCollapse()
          this.#onExpand()
        }
      }
    }
  }

  #onExpand() {
    if (!this.#isConnected || this.#isOpen()) {
      return
    }

    if (!this.modal) {
      /* Try focusing transferred target element */
      /* Firefox needs that, since loses focus */
      this.#$targetOpenSlot.addEventListener('focusout', this.#onTargetBlurAndRefocus)

      /* Transfer target */
      const targetRect = this.#$target.getBoundingClientRect()
      const widthPx = `${targetRect.width}px`
      const heightPx = `${targetRect.height}px`

      this.#$target.style.width = widthPx
      this.#$target.style.height = heightPx
      this.#$targetOpenWrapper.style.width = widthPx
      this.#$targetOpenWrapper.style.height = heightPx

      this.#$targetSlot.assignedElements()[0]?.setAttribute('slot', 'target-open')
    }

    /* Open dialog */
    this.#$dialog.showModal()
    this.#updateOrientation()
    this.#$target.setAttribute('aria-expanded', 'true')

    /* Firefox needs that, since loses focus */
    this.#targetActiveElement?.focus()
    this.#targetActiveElement = null

    /* Prevent scroll */
    this.#originalOverflowValue = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', this.#onResize)

    /* Firefox needs that, since loses focus */
    this.#$targetOpenSlot.removeEventListener('focusout', this.#onTargetBlurAndRefocus)
  }

  #onCollapse() {
    if (!this.#isOpen()) {
      return
    }

    /* Restore target */
    /* Restore whether modal or non-modal */
    this.#$targetOpenSlot.assignedElements()[0]?.setAttribute('slot', 'target')
    this.#$target.style.width = 'unset'
    this.#$target.style.height = 'unset'

    /* Close dialog */
    this.#$dialog.close()
    this.#$target.setAttribute('aria-expanded', 'false')

    /* Restore scroll */
    document.body.style.overflow = this.#originalOverflowValue
    this.#resizeThrottle.cancel()
    window.removeEventListener('resize', this.#onResize)
  }

  #isOpen() {
    return getBooleanAttribute(this.#$dialog, 'open')
  }

  #onResize = () => {
    this.#resizeThrottle.fn()
  }

  #updateOrientation = () => {
    this.#$dialog.style.width = 'max-content'

    const targetRect = this.#$target.getBoundingClientRect()
    const modalRect = this.#$dialog.getBoundingClientRect()
    let leftPos = 0
    let topPos = 0

    const orient = this.orientation
    const shouldExpandWidthToTarget = orient === 'top' || orient === 'bottom'
    const resultWidth = shouldExpandWidthToTarget
      ? Math.max(modalRect.width, targetRect.width)
      : modalRect.width

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

    if (!this.modal) {
      const targetLeftPos = targetRect.left - leftPos
      const targetTopPos = targetRect.top - topPos

      this.#$targetOpenWrapper.style.left = `${targetLeftPos}px`
      this.#$targetOpenWrapper.style.top = `${targetTopPos}px`
    }
  }

  #onBackdropMouseDown = (e: MouseEvent) => {
    if (e.target !== this.#$dialog) {
      return
    }

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

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'onClose')?.()
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent('-close')
    )
  }

  #onTargetBlurAndRefocus = (e: FocusEvent) => {
    this.#targetActiveElement = e.target as HTMLElement
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
