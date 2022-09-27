import dialogPolyfill from 'dialog-polyfill'
import '../context'
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
  Context,
  getFirstSlotElement,
  isElementFocused,
} from '../utils'
import templateHTML from './template.html'
import { orientationValues } from './utils'
import type { TContextKeyboard, TContextVisibility } from '../types'
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
  #$contentSlot: HTMLSlotElement
  #$targetOpenWrapper: HTMLElement
  #targetActiveElement: HTMLElement | null = null
  #controller = new AbortController()
  #keydownContext: Context
  #visibilityContext: Context

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$dialog = shadowRoot.querySelector('#dialog')!
    this.#$targetSlot = shadowRoot.querySelector('slot[name="target"]')!
    this.#$targetOpenSlot = shadowRoot.querySelector('slot[name="target-open"]')!
    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
    this.#$targetOpenWrapper = shadowRoot.querySelector('#target-open')!
    this.#isConnected = false
    this.#resizeThrottle = throttleAnimationFrame(this.#updateOrientation)

    this.#keydownContext = new Context(this.#$contentSlot, 'keydown')
    this.#visibilityContext = new Context(this.#$contentSlot, 'visibility')

    dialogPolyfill.registerDialog(this.#$dialog)

    /* Disable polyfill focus trap behavior */
    // @ts-ignore
    dialogPolyfill.dm.handleFocus_ = function() {}
  }

  connectedCallback() {
    const { signal } = this.#controller

    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel, { signal })
    this.#$dialog.addEventListener('mousedown', this.#onBackdropMouseDown, { signal })
    this.addEventListener('-close', this.#onCloseReactHandler, { signal })
    this.#isConnected = true

    this.#keydownContext.subscribe()
    this.#visibilityContext.subscribe()

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    }
  }

  disconnectedCallback() {
    this.#controller.abort()
    this.#onCollapse()
    this.#isConnected = false

    this.#keydownContext.unsubscribe()
    this.#visibilityContext.unsubscribe()
  }

  static get observedAttributes() {
    return ['orientation', 'open']
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
    return getRect(this.#$dialog)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'open': {
        if (isAttrTrue(newVal)) {
          requestAnimationFrame(() => {
            this.#onExpand()
          })
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
    }
  }

  #onExpand() {
    if (!this.#isConnected || this.#isOpen()) {
      return
    }

    const isNonModal = !this.modal

    // Suppress blur event on target element, since Firefox does not emit it
    this.#$targetSlot.addEventListener('blur', this.#captureActiveElement, true)

    if (isNonModal) {
      // Capture active target element and supress unnecessary events
      this.#$targetOpenSlot.addEventListener('blur', this.#captureActiveElement, true)
      // Webkit emits additional focus event when transferring element
      this.#$targetOpenSlot.addEventListener('focus', this.#stopPropagation, true)

      /* Measure target */
      const targetRect = this.#$target.getBoundingClientRect()
      const widthPx = `${targetRect.width}px`
      const heightPx = `${targetRect.height}px`

      this.#$target.style.width = widthPx
      this.#$target.style.height = heightPx
      this.#$targetOpenWrapper.style.width = widthPx
      this.#$targetOpenWrapper.style.height = heightPx

      /* Transfer target */
      getFirstSlotElement(this.#$targetSlot)?.setAttribute('slot', 'target-open')

      // Route keyboard events to content
      this.#$targetOpenSlot.addEventListener('keydown', this.#onTargetKeydown)
    }

    /* Open dialog */
    this.#$dialog.showModal()
    this.#updateOrientation()
    this.#$target.setAttribute('aria-expanded', 'true')

    // Suppress blur event on target element, since Firefox does not emit it
    this.#$targetSlot.removeEventListener('blur', this.#captureActiveElement, true)

    // Try focusing transferred target element. Firefox needs this
    if (isNonModal) {
      // Capture active target element and supress unnecessary events
      this.#$targetOpenSlot.removeEventListener('blur', this.#captureActiveElement, true)
      this.#$targetOpenSlot.removeEventListener('focus', this.#stopPropagation, true)

      // We have to delay focus, in case we expand in onFocus handler
      if (this.#targetActiveElement !== null) {
        // Firefox loses focus on target when non-modal dialog opens
        if (!isElementFocused(this.#targetActiveElement)) {
          requestAnimationFrame(() => {
            this.#$targetOpenSlot.addEventListener('focus', this.#stopPropagation, true)
            this.#targetActiveElement?.focus()
            this.#$targetOpenSlot.removeEventListener('focus', this.#stopPropagation, true)
          })
        }
      }
    } else {
      // When opening dialog in modal mode Firefox does not set focus to the first focusable element
      // Instead focus defaults to the body
      // eslint-disable-next-line no-lonely-if
      if (document.activeElement === document.body) {
        getFirstSlotElement(this.#$contentSlot)?.focus()
      }
    }

    /* Prevent scroll */
    this.#originalOverflowValue = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', this.#onResize)

    // Dispatch Visibility Context
    this.#dispatchContentVisibility(true)
  }

  #onCollapse() {
    if (!this.#isOpen()) {
      return
    }

    /* Dispatch Visibility Context */
    this.#dispatchContentVisibility(false)

    // Supress target focus event, to prevent refocus of target to reopen popover
    this.#$targetSlot.addEventListener('focus', this.#stopPropagation, true)

    /* Restore target */
    /* Restore whether modal or non-modal, since modal flag can change */
    getFirstSlotElement(this.#$targetOpenSlot)?.setAttribute('slot', 'target')
    this.#$target.style.width = 'unset'
    this.#$target.style.height = 'unset'

    /* Close dialog */
    this.#$dialog.close()
    this.#$target.setAttribute('aria-expanded', 'false')

    // Refocus before-open active element
    if (this.#targetActiveElement !== null) {
      // Webkit focuses back wrong "before-open" element when closing modal dialog
      if (!isElementFocused(this.#targetActiveElement)) {
        requestAnimationFrame(() => {
          // Supress target focus event, to prevent refocus of target to reopen popover
          this.#$targetSlot.addEventListener('focus', this.#stopPropagation, true)
          this.#targetActiveElement!.focus()
          this.#targetActiveElement = null
          this.#$targetSlot.removeEventListener('focus', this.#stopPropagation, true)
        })
      } else {
        this.#targetActiveElement = null
      }
    }

    // Supress target focus event, to prevent refocus of target to reopen popover
    this.#$targetSlot.removeEventListener('focus', this.#stopPropagation, true)

    /* Route keyboard events to content */
    this.#$targetOpenSlot.removeEventListener('keydown', this.#onTargetKeydown)

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
    const shouldSetWidthToTarget = orient === 'top' || orient === 'bottom'
    const resultWidth = shouldSetWidthToTarget
      ? targetRect.width
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

  #captureActiveElement = (e: FocusEvent) => {
    e.stopPropagation()
    this.#targetActiveElement = e.target as HTMLElement
  }

  #stopPropagation = (e: Event) => {
    e.stopPropagation()
  }

  #dispatchContentVisibility(isVisible: boolean) {
    for (const $el of this.#visibilityContext.elements) {
      $el.dispatchEvent(
        new CustomEvent<TContextVisibility>('-visibility', { detail: isVisible })
      )
    }
  }

  #onTargetKeydown = (e: KeyboardEvent) => {
    for (const $el of this.#keydownContext.elements) {
      let isPrevented = false

      $el.dispatchEvent(
        new CustomEvent<TContextKeyboard>('-keydown', {
          detail: {
            code: e.code,
            preventDefault: () => {
              isPrevented = true
            },
          },
        })
      )

      if (isPrevented) {
        e.preventDefault()
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
