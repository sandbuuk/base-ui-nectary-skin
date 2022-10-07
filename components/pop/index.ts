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
  isElementFocused,
  getFirstSlotElement,
  updateIntegerAttribute,
  getIntegerAttribute,
} from '../utils'
import { Context, dispatchContextConnectEvent, dispatchContextDisconnectEvent } from '../utils/context'
import templateHTML from './template.html'
import { assertOrientation, disableScroll, enableScroll, orientationValues } from './utils'
import type { TContextVisibility, TContextKeyboard } from '../utils/context'
import type { TSinchPopElement, TSinchPopOrientation, TSinchPopReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-pop', class extends NectaryElement {
  #$target: HTMLElement
  #$dialog: HTMLDialogElement
  #isConnected: boolean
  #resizeThrottle
  #$targetSlot: HTMLSlotElement
  #$targetOpenSlot: HTMLSlotElement
  #$contentSlot: HTMLSlotElement
  #$targetOpenWrapper: HTMLElement
  #targetActiveElement: HTMLElement | null = null
  #controller: AbortController | null = null
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
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#keydownContext.subscribe()
    this.#visibilityContext.subscribe()

    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel, { signal })
    this.#$dialog.addEventListener('mousedown', this.#onBackdropMouseDown, { signal })
    this.addEventListener('-close', this.#onCloseReactHandler, { signal })
    this.addEventListener('-visibility', this.#onContextVisibility as any, { signal })
    dispatchContextConnectEvent(this, 'visibility')
    this.#isConnected = true

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    }
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#keydownContext.unsubscribe()
    this.#visibilityContext.unsubscribe()
    dispatchContextDisconnectEvent(this, 'visibility')
    this.#onCollapse()
    this.#isConnected = false
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
    return getLiteralAttribute(this, orientationValues, 'orientation')
  }

  set orientation(value: TSinchPopOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  set inset(inset: number) {
    updateIntegerAttribute(this, 'inset', inset)
  }

  get inset(): number {
    return getIntegerAttribute(this, 'inset', 0)
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
        assertOrientation(newVal)

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
      this.#$targetOpenSlot.addEventListener('focus', this.#stopEventPropagation, true)

      /* Measure target */
      const targetRect = this.#$target.getBoundingClientRect()
      const widthPx = `${targetRect.width}px`
      const heightPx = `${targetRect.height}px`

      this.#$target.style.width = widthPx
      this.#$target.style.height = heightPx
      this.#$targetOpenWrapper.style.width = widthPx
      this.#$targetOpenWrapper.style.height = heightPx

      /* Transfer target */
      this.#$targetSlot.assignedElements()[0]?.setAttribute('slot', 'target-open')

      // Route keyboard events to content
      this.#$targetOpenSlot.addEventListener('keydown', this.#onTargetKeydown)
    }

    /* Open dialog */
    this.#$dialog.showModal()
    this.#$target.setAttribute('aria-expanded', 'true')
    this.#updateOrientation()

    // Suppress blur event on target element, since Firefox does not emit it
    this.#$targetSlot.removeEventListener('blur', this.#captureActiveElement, true)

    // Try focusing transferred target element. Firefox needs this
    if (isNonModal) {
      // Capture active target element and supress unnecessary events
      this.#$targetOpenSlot.removeEventListener('blur', this.#captureActiveElement, true)
      this.#$targetOpenSlot.removeEventListener('focus', this.#stopEventPropagation, true)

      // We have to delay focus, in case we expand in onFocus handler
      if (this.#targetActiveElement !== null) {
        // Firefox loses focus on target when non-modal dialog opens
        if (!isElementFocused(this.#targetActiveElement)) {
          requestAnimationFrame(() => {
            this.#$targetOpenSlot.addEventListener('focus', this.#stopEventPropagation, true)
            this.#targetActiveElement?.focus()
            this.#$targetOpenSlot.removeEventListener('focus', this.#stopEventPropagation, true)
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
    disableScroll()
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
    this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)

    /* Restore target */
    /* Restore whether modal or non-modal, since modal flag can change */
    this.#$targetOpenSlot.assignedElements()[0]?.setAttribute('slot', 'target')
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
          this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)
          this.#targetActiveElement!.focus()
          this.#targetActiveElement = null
          this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)
        })
      } else {
        this.#targetActiveElement = null
      }
    }

    // Supress target focus event, to prevent refocus of target to reopen popover
    this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)

    /* Route keyboard events to content */
    this.#$targetOpenSlot.removeEventListener('keydown', this.#onTargetKeydown)

    /* Restore scroll */
    enableScroll()
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
    const orient = this.orientation
    const shouldSetWidthToTarget = orient === 'top-stretch' || orient === 'bottom-stretch'
    const modalHeight = modalRect.height
    const modalWidth = shouldSetWidthToTarget ? targetRect.width : modalRect.width
    const inset = this.inset
    let xPos = 0
    let yPos = 0

    if (orient === 'bottom-right' || orient === 'top-right' || orient === 'top-stretch' || orient === 'bottom-stretch') {
      xPos = targetRect.x
    }

    if (orient === 'bottom-left' || orient === 'top-left') {
      xPos = targetRect.x + targetRect.width - modalWidth
    }

    if (orient === 'bottom-center' || orient === 'top-center') {
      xPos = targetRect.x + targetRect.width / 2 - modalWidth / 2
    }

    if (orient === 'center-right') {
      xPos = targetRect.x + targetRect.width
    }

    if (orient === 'center-left') {
      xPos = targetRect.x - modalWidth
    }

    if (orient === 'bottom-left' || orient === 'bottom-right' || orient === 'bottom-stretch' || orient === 'bottom-center') {
      yPos = targetRect.y + targetRect.height
    }

    if (orient === 'top-left' || orient === 'top-right' || orient === 'top-stretch' || orient === 'top-center') {
      yPos = targetRect.y - modalHeight
    }

    if (orient === 'center-left' || orient === 'center-right') {
      yPos = targetRect.y + targetRect.height / 2 - modalHeight / 2
    }

    xPos = Math.max(inset, Math.min(xPos, window.innerWidth - modalWidth - inset))
    yPos = Math.max(inset, Math.min(yPos, window.innerHeight - modalHeight - inset))

    this.#$dialog.style.left = `${xPos}px`
    this.#$dialog.style.top = `${yPos}px`
    this.#$dialog.style.width = `${modalWidth}px`

    if (!this.modal) {
      const targetLeftPos = targetRect.left - xPos
      const targetTopPos = targetRect.top - yPos

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

  #stopEventPropagation = (e: Event) => {
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

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (!e.detail) {
      this.#dispatchCloseEvent()
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-pop': TSinchPopReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-pop': TSinchPopElement,
  }
}
