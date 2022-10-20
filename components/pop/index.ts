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
  updateIntegerAttribute,
  getIntegerAttribute,
  getFirstFocusableElement,
  getFirstSlotElement,
} from '../utils'
import { Context, dispatchContextConnectEvent, dispatchContextDisconnectEvent } from '../utils/context'
import templateHTML from './template.html'
import { assertOrientation, disableScroll, enableScroll, orientationValues } from './utils'
import type { TRect } from '../types'
import type { TContextVisibility, TContextKeyboard } from '../utils/context'
import type { TSinchPopElement, TSinchPopOrientation, TSinchPopReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-pop', class extends NectaryElement {
  #$target: HTMLElement
  #$focus: HTMLElement
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
  #targetStyleValue: string | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$focus = shadowRoot.querySelector('#focus')!
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

  get footprintRect() {
    return this.#getTargetRect()
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

  #getTargetRect(): TRect {
    let item = getFirstSlotElement(this.#$targetSlot, true)

    if (item === null && this.#isOpen()) {
      item = getFirstSlotElement(this.#$targetOpenSlot, true)
    }

    if (item === null) {
      return getRect(this.#$target)
    }

    if (Reflect.has(item, 'footprintRect')) {
      return (item as any).footprintRect as TRect
    }

    return getRect(item)
  }

  #getFirstTargetElement(slot: HTMLSlotElement): HTMLElement {
    const item = getFirstSlotElement(slot, true)

    if (item === null) {
      return this.#$target
    }

    return item
  }

  #onExpand() {
    if (!this.#isConnected || this.#isOpen()) {
      return
    }

    // When opening dialog in modal mode Firefox does not emit "blur" event on the active element
    // But focuses element back after closing modal, and emits "focus" event
    // Supress "blur" event on target element
    this.#$targetSlot.addEventListener('blur', this.#stopEventPropagation, true)
    // Capture using related target
    // Tooltip can open dialog with outside focused element
    this.#$focus.style.setProperty('display', 'block')
    this.#$focus.addEventListener('focus', this.#captureRelatedActiveElement)
    // Focus our target explicitly to capture previous active element
    this.#$focus.focus()
    this.#$focus.removeEventListener('focus', this.#captureRelatedActiveElement)
    this.#$focus.style.removeProperty('display')
    this.#$targetSlot.removeEventListener('blur', this.#stopEventPropagation, true)

    /* Open dialog */
    this.#$dialog.showModal()
    this.#$target.setAttribute('aria-expanded', 'true')
    this.#updateOrientation()

    if (this.modal) {
      // When opening dialog in modal mode Firefox does not set focus to the first focusable element
      // Instead focus defaults to the body
      getFirstFocusableElement(this.#$contentSlot)?.focus()
    } else {
      /* Measure target */
      const $targetEl = this.#getFirstTargetElement(this.#$targetSlot)
      const targetElComputedStyle = getComputedStyle($targetEl)
      const marginLeft = parseInt(targetElComputedStyle.marginLeft)
      const marginRight = parseInt(targetElComputedStyle.marginRight)
      const marginTop = parseInt(targetElComputedStyle.marginTop)
      const marginBottom = parseInt(targetElComputedStyle.marginBottom)
      const targetRect = this.#getTargetRect()

      this.#$target.style.setProperty('display', 'block')
      this.#$target.style.setProperty('width', `${targetRect.width + marginLeft + marginRight}px`)
      this.#$target.style.setProperty('height', `${targetRect.height + marginTop + marginBottom}px`)
      this.#$targetOpenWrapper.style.setProperty('width', `${targetRect.width}px`)
      this.#$targetOpenWrapper.style.setProperty('height', `${targetRect.height}px`)
      this.#targetStyleValue = $targetEl.getAttribute('style')
      $targetEl.style.setProperty('margin', '0')
      $targetEl.style.setProperty('position', 'static')

      if (targetElComputedStyle.transform !== 'none') {
        const matrix = new DOMMatrixReadOnly(targetElComputedStyle.transform)

        $targetEl.style.setProperty('transform', matrix.translate(-matrix.e, -matrix.f).toString())
      }

      /* Transfer target */
      getFirstSlotElement(this.#$targetSlot)?.setAttribute('slot', 'target-open')

      // Route keyboard events to content
      this.#$targetOpenSlot.addEventListener('keydown', this.#onTargetKeydown)

      if (this.#targetActiveElement !== null) {
        this.#$targetOpenSlot.addEventListener('focus', this.#stopEventPropagation, true)
        this.#targetActiveElement.focus()
        this.#$targetOpenSlot.removeEventListener('focus', this.#stopEventPropagation, true)

        // Safari requires to delay focus() call
        if (!isElementFocused(this.#targetActiveElement)) {
          requestAnimationFrame(() => {
            this.#$targetOpenSlot.addEventListener('focus', this.#stopEventPropagation, true)
            this.#targetActiveElement!.focus()
            this.#$targetOpenSlot.removeEventListener('focus', this.#stopEventPropagation, true)
          })
        }
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

    const isNonModal = !this.modal

    /* Dispatch Visibility Context */
    this.#dispatchContentVisibility(false)

    // Unsubscribe keyboard route
    this.#$targetOpenSlot.removeEventListener('keydown', this.#onTargetKeydown)

    // In non-modal mode we close dialog first and target element emits blur event
    if (isNonModal) {
      this.#targetActiveElement = null
      this.#$targetOpenSlot.addEventListener('blur', this.#captureActiveElement, true)
    }

    /* Close dialog */
    this.#$dialog.close()
    this.#$target.setAttribute('aria-expanded', 'false')

    // Unsubscribe "blur" capture
    if (isNonModal) {
      this.#$targetOpenSlot.removeEventListener('blur', this.#captureActiveElement, true)
    }

    /* Restore target */
    /* Restore whether modal or non-modal, since modal flag can change */
    const targetEl = this.#getFirstTargetElement(this.#$targetOpenSlot)

    targetEl.style.removeProperty('margin')
    targetEl.style.removeProperty('position')
    targetEl.style.removeProperty('transform')

    if (this.#targetStyleValue !== null) {
      targetEl.setAttribute('style', this.#targetStyleValue)
      this.#targetStyleValue = null
    }

    getFirstSlotElement(this.#$targetOpenSlot)?.setAttribute('slot', 'target')
    this.#$target.style.removeProperty('display')
    this.#$target.style.removeProperty('width')
    this.#$target.style.removeProperty('height')

    // Refocus before-open active element
    if (this.#targetActiveElement !== null) {
      // Webkit focuses back wrong "before-open" element when closing modal dialog
      if (!isElementFocused(this.#targetActiveElement)) {
        // Supress target focus event, to prevent refocus of target to reopen popover
        this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)
        this.#targetActiveElement.focus()
        this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)

        // Safari sometimes does not focus element synchronously
        if (!isElementFocused(this.#targetActiveElement)) {
          const $targetEl = this.#targetActiveElement

          requestAnimationFrame(() => {
            this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)
            $targetEl.focus()
            this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)
          })
        }

        this.#targetActiveElement = null
      }
    }

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
    this.#$dialog.style.setProperty('width', 'max-content')

    const targetRect = this.#getTargetRect()
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

    xPos = Math.round(Math.max(inset, Math.min(xPos, window.innerWidth - modalWidth - inset)))
    yPos = Math.round(Math.max(inset, Math.min(yPos, window.innerHeight - modalHeight - inset)))

    this.#$dialog.style.setProperty('left', `${xPos}px`)
    this.#$dialog.style.setProperty('top', `${yPos}px`)
    this.#$dialog.style.setProperty('width', `${modalWidth}px`)

    if (!this.modal) {
      const targetLeftPos = targetRect.x - xPos
      const targetTopPos = targetRect.y - yPos

      this.#$targetOpenWrapper.style.setProperty('left', `${targetLeftPos}px`)
      this.#$targetOpenWrapper.style.setProperty('top', `${targetTopPos}px`)
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
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent('-close')
    )
  }

  #captureRelatedActiveElement = (e: FocusEvent) => {
    e.stopPropagation()
    this.#targetActiveElement = e.relatedTarget as HTMLElement
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
