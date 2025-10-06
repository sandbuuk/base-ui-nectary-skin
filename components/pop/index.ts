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
  Context,
  subscribeContext,
  isTargetEqual,
  isAttrEqual,
  getScrollableParents,
} from '../utils'
import templateHTML from './template.html?raw'
import { disableOverscroll, enableOverscroll, orientationValues } from './utils'
import type { TSinchPopOrientation } from './types'
import type { TRect } from '../types'
import type { TContextVisibility } from '../utils'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Pop extends NectaryElement {
  #$targetWrapper: HTMLElement
  #$focus: HTMLElement
  #$dialog: HTMLDialogElement
  #resizeThrottle
  #resizeObserver: ResizeObserver
  #$targetSlot: HTMLSlotElement
  #$targetOpenSlot: HTMLSlotElement
  #$contentSlot: HTMLSlotElement
  #$targetOpenWrapper: HTMLElement
  #targetActiveElement: HTMLElement | null = null
  #controller: AbortController | null
  #keydownContext: Context<'keydown'>
  #visibilityContext: Context<'visibility'>
  #targetStyleValue: string | null = null
  #modalWidth = 0
  #modalHeight = 0
  #scrollableParents: (HTMLElement | Document)[] = []

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$targetWrapper = shadowRoot.querySelector('#target')!
    this.#$focus = shadowRoot.querySelector('#focus')!
    this.#$dialog = shadowRoot.querySelector('#dialog')!
    this.#$targetSlot = shadowRoot.querySelector('slot[name="target"]')!
    this.#$targetOpenSlot = shadowRoot.querySelector('slot[name="target-open"]')!
    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
    this.#$targetOpenWrapper = shadowRoot.querySelector('#target-open')!

    this.#resizeThrottle = throttleAnimationFrame(this.#updateOrientation)
    this.#resizeObserver = new ResizeObserver(() => {
      this.#resizeThrottle.fn()
    })

    this.#keydownContext = new Context(this.#$contentSlot, 'keydown')
    this.#visibilityContext = new Context(this.#$contentSlot, 'visibility')
    this.#controller = new AbortController()
  }

  connectedCallback() {
    super.connectedCallback()

    if (this.#controller === null) {
      this.#controller = new AbortController()
    }

    const { signal } = this.#controller

    this.#keydownContext.listen(signal)
    this.#visibilityContext.listen(signal)

    this.setAttribute('role', 'dialog')
    this.#$dialog.addEventListener('cancel', this.#onCancel, { signal })
    this.#$dialog.addEventListener('mousedown', this.#onBackdropMouseDown, { signal })
    this.addEventListener('-close', this.#onCloseReactHandler, { signal })
    subscribeContext(this, 'visibility', this.#onContextVisibility, signal)

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
    this.#resizeThrottle.cancel()
    this.#resizeObserver.disconnect()
    this.#onCollapse()
  }

  static get observedAttributes() {
    return [
      'orientation',
      'open',
    ]
  }

  get allowScroll(): boolean {
    return getBooleanAttribute(this, 'allow-scroll')
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

  get shouldCloseOnBackdropClick(): boolean {
    return !getBooleanAttribute(this, 'disable-backdrop-close')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'open': {
        const shouldOpen = isAttrTrue(newVal)

        if (shouldOpen) {
          // Delay opening to wait until "orientation" attribute assigned on root
          requestAnimationFrame(() => {
            if (this.isDomConnected && getBooleanAttribute(this, 'open')) {
              this.#onExpand()
            }
          })
        } else {
          this.#onCollapse()
        }

        updateBooleanAttribute(this, 'open', shouldOpen)

        break
      }

      case 'orientation': {
        if (this.#$dialog.open) {
          this.#updateOrientation()
        }

        break
      }
    }
  }

  #getTargetRect(): TRect {
    let item = getFirstSlotElement(this.#$targetSlot, true)

    if (item === null && this.#$dialog.open) {
      item = getFirstSlotElement(this.#$targetOpenSlot, true)
    }

    if (item === null) {
      return getRect(this.#$targetWrapper)
    }

    if (Reflect.has(item, 'footprintRect')) {
      return (item as any).footprintRect as TRect
    }

    return getRect(item)
  }

  #getFirstTargetElement(slot: HTMLSlotElement): HTMLElement {
    const item = getFirstSlotElement(slot, true)

    if (item === null) {
      return this.#$targetWrapper
    }

    return item
  }

  #onExpand() {
    if (!this.isDomConnected || this.#$dialog.open) {
      return
    }

    // When opening dialog in modal mode Firefox does not emit "blur" event on the active element
    // But focuses element back after closing modal, and emits "focus" event
    // Supress "blur" event on target element
    this.#$targetSlot.addEventListener('blur', this.#stopEventPropagation, true)
    this.#$focus.setAttribute('tabindex', '-1')
    this.#$focus.style.display = 'block'
    // Capture using related target
    // Tooltip can open dialog with outside focused element
    this.#$focus.addEventListener('focus', this.#captureRelatedActiveElement)
    // Focus our target explicitly to capture previous active element
    this.#$focus.focus()
    this.#$focus.removeEventListener('focus', this.#captureRelatedActiveElement)
    this.#$targetSlot.removeEventListener('blur', this.#stopEventPropagation, true)
    // Remove tabindex, because Safari freezes the UI, after closing Pop
    //   when Pop is in target slot of another Pop
    this.#$focus.removeAttribute('tabindex')
    this.#$focus.removeAttribute('style')

    /*
    * Open dialog
    * We should theoretically always call show() instead of showModal() in non-modal mode, but this currently has too many side-effects accross the project
    */
    if (this.modal || !this.allowScroll) {
      this.#$dialog.showModal()
    } else {
      this.#$dialog.show()
    }

    this.#$targetWrapper.setAttribute('aria-expanded', 'true')
    this.#updateOrientation()

    this.#resizeObserver.observe(this.#$dialog)

    if (this.modal) {
      // When opening dialog in modal mode Firefox does not set focus to the first focusable element
      // Instead focus defaults to the body
      getFirstFocusableElement(this.#$contentSlot)?.focus()
    } else {
      if (!this.allowScroll) {
        /* Measure target */
        const $targetEl = this.#getFirstTargetElement(this.#$targetSlot)
        const targetElComputedStyle = getComputedStyle($targetEl)
        const marginLeft = parseInt(targetElComputedStyle.marginLeft)
        const marginRight = parseInt(targetElComputedStyle.marginRight)
        const marginTop = parseInt(targetElComputedStyle.marginTop)
        const marginBottom = parseInt(targetElComputedStyle.marginBottom)
        const targetRect = this.#getTargetRect()

        this.#$targetWrapper.style.setProperty('display', 'block')
        this.#$targetWrapper.style.setProperty('width', `${targetRect.width + marginLeft + marginRight}px`)
        this.#$targetWrapper.style.setProperty('height', `${targetRect.height + marginTop + marginBottom}px`)
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
      }

      const activeSlot = this.allowScroll ? this.#$targetSlot : this.#$targetOpenSlot

      // Route keyboard events to content
      activeSlot.addEventListener('keydown', this.#onTargetKeydown)

      if (this.#targetActiveElement !== null) {
        activeSlot.addEventListener('focus', this.#stopEventPropagation, true)
        this.#targetActiveElement.focus()
        activeSlot.removeEventListener('focus', this.#stopEventPropagation, true)

        // Safari requires to delay focus() call
        if (!isElementFocused(this.#targetActiveElement)) {
          requestAnimationFrame(() => {
            if (this.isDomConnected && this.#$dialog.open) {
              activeSlot.addEventListener('focus', this.#stopEventPropagation, true)
              this.#targetActiveElement!.focus()
              activeSlot.removeEventListener('focus', this.#stopEventPropagation, true)
            }
          })
        }
      }
    }

    if (!this.allowScroll) {
      disableOverscroll()
    } else {
      this.#scrollableParents = getScrollableParents(this.#getFirstTargetElement(this.#$targetSlot))
      this.#scrollableParents.forEach((el) => {
        el.addEventListener('scroll', this.#updatePosition, { passive: true, capture: true })
      })
    }

    window.addEventListener('resize', this.#onResize)

    // Subscribe after delay to not get immediate callbacks
    requestAnimationFrame(() => {
      if (this.isDomConnected && this.#$dialog.open) {
        this.#$contentSlot.addEventListener('slotchange', this.#onContentSlotChange)
      }
    })

    // Dispatch Visibility Context
    this.#dispatchContentVisibility(true)
  }

  #onCollapse() {
    if (!this.#$dialog.open) {
      return
    }

    this.#resizeObserver.disconnect()

    const isNonModal = !this.modal
    const activeSlot = this.allowScroll ? this.#$targetSlot : this.#$targetOpenSlot

    /* Dispatch Visibility Context */
    this.#dispatchContentVisibility(false)

    // Unsubscribe keyboard route
    activeSlot.removeEventListener('keydown', this.#onTargetKeydown)

    // In non-modal mode we close dialog first and target element emits blur event
    if (isNonModal) {
      activeSlot.addEventListener('blur', this.#captureActiveElement, true)
    }

    /* Close dialog */
    this.#$dialog.close()
    this.#$targetWrapper.setAttribute('aria-expanded', 'false')

    // Unsubscribe "blur" capture
    if (isNonModal) {
      activeSlot.removeEventListener('blur', this.#captureActiveElement, true)
    }

    /* Restore target */
    if (isNonModal && !this.allowScroll) {
      const targetEl = this.#getFirstTargetElement(this.#$targetOpenSlot)

      targetEl.style.removeProperty('margin')
      targetEl.style.removeProperty('position')
      targetEl.style.removeProperty('transform')

      if (this.#targetStyleValue !== null) {
        targetEl.setAttribute('style', this.#targetStyleValue)
        this.#targetStyleValue = null
      }

      getFirstSlotElement(this.#$targetOpenSlot)?.setAttribute('slot', 'target')
      this.#$targetWrapper.style.removeProperty('display')
      this.#$targetWrapper.style.removeProperty('width')
      this.#$targetWrapper.style.removeProperty('height')
    }

    // Refocus before-open active element
    if (this.#targetActiveElement !== null) {
      // Webkit focuses back wrong "before-open" element when closing modal dialog
      if (!isElementFocused(this.#targetActiveElement)) {
        // Supress target focus event, to prevent refocus of target to reopen popover
        this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)
        this.#targetActiveElement.focus({ preventScroll: true })
        this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)

        // Safari sometimes does not focus element synchronously
        if (!isElementFocused(this.#targetActiveElement)) {
          const $targetEl = this.#targetActiveElement

          requestAnimationFrame(() => {
            if (this.isDomConnected && !this.#$dialog.open) {
              this.#$targetSlot.addEventListener('focus', this.#stopEventPropagation, true)
              $targetEl.focus({ preventScroll: true })
              this.#$targetSlot.removeEventListener('focus', this.#stopEventPropagation, true)
            }
          })
        }

        this.#targetActiveElement = null
      }
    }

    if (!this.allowScroll) {
      enableOverscroll()
    } else {
      this.#scrollableParents.forEach((el) => {
        el.removeEventListener('scroll', this.#updatePosition, { capture: true })
      })
    }

    this.#resizeThrottle.cancel()
    window.removeEventListener('resize', this.#onResize)

    this.#scrollableParents = []
    this.#$contentSlot.removeEventListener('slotchange', this.#onContentSlotChange)
  }

  #onResize = () => {
    this.#resizeThrottle.fn()
  }

  #updatePosition = () => {
    const targetRect = this.modal || this.allowScroll
      ? this.#getTargetRect()
      : this.#$targetWrapper.getBoundingClientRect()
    const orient = this.orientation
    const modalWidth = this.#modalWidth
    const modalHeight = this.#modalHeight
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

    const clampedXPos = Math.max(inset, Math.min(xPos, window.innerWidth - modalWidth - inset))
    const clampedYPos = Math.max(inset, Math.min(yPos, window.innerHeight - modalHeight - inset))

    // if (Math.abs(clampedXPos - xPos) > 2 || Math.abs(clampedYPos - yPos) > 2) {
    //   this.#dispatchCloseEvent()
    // }

    this.#$dialog.style.setProperty('left', `${clampedXPos}px`)
    this.#$dialog.style.setProperty('top', `${clampedYPos}px`)

    if (!this.modal && !this.allowScroll) {
      const targetLeftPos = targetRect.x - clampedXPos
      const targetTopPos = targetRect.y - clampedYPos

      this.#$targetOpenWrapper.style.setProperty('left', `${targetLeftPos}px`)
      this.#$targetOpenWrapper.style.setProperty('top', `${targetTopPos}px`)
    }
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

    this.#modalHeight = modalHeight
    this.#modalWidth = modalWidth

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

    if (!this.modal && !this.allowScroll) {
      const targetLeftPos = targetRect.x - xPos
      const targetTopPos = targetRect.y - yPos

      this.#$targetOpenWrapper.style.setProperty('left', `${targetLeftPos}px`)
      this.#$targetOpenWrapper.style.setProperty('top', `${targetTopPos}px`)
    }
  }

  #onBackdropMouseDown = (e: MouseEvent) => {
    if (this.shouldCloseOnBackdropClick && isTargetEqual(e, this.#$dialog)) {
      const rect = this.popoverRect
      const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

      if (!isInside) {
        e.stopPropagation()
        this.#dispatchCloseEvent()
      }
    }
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    this.#dispatchCloseEvent()
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-close')?.(e)
    getReactEventHandler(this, 'onClose')?.(e)
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
    this.#visibilityContext.dispatch(isVisible)
  }

  #onTargetKeydown = (e: KeyboardEvent) => {
    this.#keydownContext.dispatch({
      code: e.code,
      preventDefault: () => {
        e.preventDefault()
      },
    })
  }

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (!e.detail) {
      this.#dispatchCloseEvent()
    }
  }

  #onContentSlotChange = (e: Event) => {
    e.stopPropagation()

    if (this.#$dialog.open) {
      this.#updateOrientation()
    }
  }
}

defineCustomElement('sinch-pop', Pop)
