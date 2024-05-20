import '../text'
import '../pop'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
  rectOverlap,
  getReactEventHandler,
  shouldReduceMotion,
} from '../utils'
import templateHTML from './template.html'
import { TooltipState } from './tooltip-state'
import { getPopOrientation, orientationValues, textAlignValues, typeValues } from './utils'
import type { TSinchTooltipElement, TSinchTooltipOrientation, TSinchTooltipReact, TSinchTooltipTextAlign, TSinchTooltipType } from './types'
import type { TSinchPopElement } from '../pop/types'
import type { TRect } from '../types'

const TIP_SIZE = 8
const SHOW_DELAY_SLOW = 1000
const SHOW_DELAY_FAST = 250
const HIDE_DELAY = 0
const ANIMATION_DURATION = 100

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tooltip', class extends NectaryElement {
  #$pop: TSinchPopElement
  #$tooltipText: HTMLElement
  #$content: HTMLElement
  #$contentWrapper: HTMLElement
  #$tip: HTMLElement
  #$target: HTMLElement
  #controller: AbortController | null = null
  #tooltipState: TooltipState
  #animation: Animation | null = null
  #shouldReduceMotion = false

  #isSubscribed = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$pop = shadowRoot.querySelector('#pop')!
    this.#$tooltipText = shadowRoot.querySelector('#text')!
    this.#$content = shadowRoot.querySelector('#content')!
    this.#$contentWrapper = shadowRoot.querySelector('#content-wrapper')!
    this.#$tip = shadowRoot.querySelector('#tip')!
    this.#$target = shadowRoot.querySelector('#target')!
    this.#shouldReduceMotion = shouldReduceMotion()

    this.#tooltipState = new TooltipState({
      showDelay: SHOW_DELAY_SLOW,
      hideDelay: this.#shouldReduceMotion ? HIDE_DELAY + ANIMATION_DURATION : HIDE_DELAY,
      hideAnimationDuration: this.#shouldReduceMotion ? 0 : ANIMATION_DURATION,
      onShowStart: this.#onStateShowStart,
      onShowEnd: this.#onStateShowEnd,
      onHideStart: this.#onStateHideStart,
      onHideEnd: this.#onStateHideEnd,
    })
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$pop.addEventListener('-close', this.#onPopClose, options)
    this.addEventListener('-show', this.#onShowReactHandler, options)
    this.addEventListener('-hide', this.#onHideReactHandler, options)

    updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))
    this.#updateText()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#tooltipState.destroy()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'text',
      'orientation',
      'text-align',
      'type',
      'aria-label',
      'aria-description',
    ]
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#updateText()

        break
      }

      case 'orientation': {
        updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))

        if (this.#isOpen()) {
          this.#resetTipOrientation()
          this.#updateTipOrientation()
        }

        break
      }

      case 'text-align': {
        updateAttribute(this.#$pop, 'text-align', newVal)

        break
      }

      case 'type': {
        this.#tooltipState.updateOptions({
          showDelay: newVal === 'fast' ? SHOW_DELAY_FAST : SHOW_DELAY_SLOW,
        })

        break
      }

      case 'aria-label':
      case 'aria-description': {
        updateAttribute(this.#$pop, name, newVal)

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'top')
  }

  set orientation(value: TSinchTooltipOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get 'text-align'() {
    return getLiteralAttribute(this, textAlignValues, 'text-align', 'left')
  }

  set 'text-align'(value: TSinchTooltipTextAlign) {
    updateLiteralAttribute(this, textAlignValues, 'text-align', value)
  }

  get type(): TSinchTooltipType {
    return getLiteralAttribute(this, typeValues, 'type', 'slow')
  }

  set type(value: TSinchTooltipType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get footprintRect(): TRect {
    return this.#$pop.footprintRect
  }

  get tooltipRect(): TRect {
    return this.#$pop.popoverRect
  }

  // Begin hide animation if shown, skipping HIDE_DELAY wait
  #onMouseDown = () => {
    this.#tooltipState.destroy()
  }

  // Underlying pop asks for a close
  #onPopClose = () => {
    // Immediately close tooltip
    this.#tooltipState.destroy()
  }

  #onMouseEnter = () => {
    this.#tooltipState.show()
  }

  #onMouseLeave = (e: MouseEvent) => {
    if (!this.#isOpen() || (e.relatedTarget !== this.#$contentWrapper && e.relatedTarget !== this.#$target)) {
      this.#tooltipState.hide()
    }
  }

  #onScroll = () => {
    this.#tooltipState.destroy()
  }

  // Tooltip begins to wait for SHOW_DELAY on mouseenter
  #onStateShowStart = () => {
    // Scroll interrupts SHOW_DELAY timer
    this.#subscribeScroll()
    // MouseLeave interrupts SHOW_DELAY timer
    this.#subscribeMouseLeaveEvents()
  }

  // SHOW_DELAY ended, tooltip can be shown with animation
  #onStateShowEnd = () => {
    this.#dispatchShowEvent()
    updateBooleanAttribute(this.#$pop, 'open', true)
    requestAnimationFrame(this.#updateTipOrientation)

    if (this.#animation !== null) {
      this.#animation.updatePlaybackRate(1)
      this.#animation.play()
    } else {
      this.#animation = this.#$content.animate({
        opacity: [0, 1],
      }, {
        duration: this.#shouldReduceMotion ? 0 : ANIMATION_DURATION,
        iterations: 1,
        fill: 'forwards',
      })
    }
  }

  // HIDE_DELAY ended, begin tooltip hide animation
  #onStateHideStart = () => {
    this.#animation!.updatePlaybackRate(-1)
    this.#animation!.play()
  }

  // Hide animation ended, tooltip can be hidden
  #onStateHideEnd = () => {
    if (this.#isOpen()) {
      this.#animation!.finish()
      this.#dispatchHideEvent()
      updateBooleanAttribute(this.#$pop, 'open', false)
    }

    this.#resetTipOrientation()
    this.#unsubscribeMouseLeaveEvents()
    this.#unsubscribeScroll()
  }

  #resetTipOrientation() {
    this.#$tip.style.top = ''
    this.#$tip.style.left = ''
  }

  #updateTipOrientation = () => {
    const orient = this.orientation
    const targetRect = this.#$pop.footprintRect
    const contentRect = this.#$content.getBoundingClientRect()
    const diffX = targetRect.x - contentRect.x
    const diffY = targetRect.y - contentRect.y

    if (orient === 'left' || orient === 'right') {
      const yPos = Math.max(TIP_SIZE, Math.min(diffY + targetRect.height / 2, contentRect.height - TIP_SIZE))

      this.#$tip.style.top = `${yPos}px`
    } else {
      let xPos = Math.max(TIP_SIZE, Math.min(diffX + targetRect.width / 2, contentRect.width - TIP_SIZE))

      if (orient === 'bottom-left' || orient === 'top-left') {
        xPos = Math.max(xPos, contentRect.width * 0.75)
      }

      if (orient === 'bottom-right' || orient === 'top-right') {
        xPos = Math.min(xPos, contentRect.width * 0.25)
      }

      this.#$tip.style.left = `${xPos}px`
    }

    setClass(this.#$tip, 'hidden', rectOverlap(targetRect, contentRect))
  }

  #updateText() {
    if (!this.isDomConnected) {
      return
    }

    const text = this.text

    this.#$tooltipText.textContent = text

    if (text.length === 0) {
      if (this.#isSubscribed) {
        this.#tooltipState.destroy()
        this.#unsubscribeMouseEnterEvent()
      }
    } else {
      this.#subscribeMouseEnterEvent()
    }
  }

  #subscribeMouseEnterEvent() {
    if (!this.isDomConnected || this.#isSubscribed) {
      return
    }

    this.#$target.addEventListener('mouseenter', this.#onMouseEnter, {
      signal: this.#controller!.signal,
    })

    this.#isSubscribed = true
  }

  #unsubscribeMouseEnterEvent() {
    this.#$target.removeEventListener('mouseenter', this.#onMouseEnter)
    this.#isSubscribed = false
  }

  #subscribeMouseLeaveEvents() {
    const options: AddEventListenerOptions = { signal: this.#controller!.signal }

    this.#$target.addEventListener('mousedown', this.#onMouseDown, options)
    this.#$target.addEventListener('mouseleave', this.#onMouseLeave, options)
    this.#$contentWrapper.addEventListener('mouseenter', this.#onMouseEnter, options)
    this.#$contentWrapper.addEventListener('mouseleave', this.#onMouseLeave, options)
  }

  #unsubscribeMouseLeaveEvents() {
    this.#$target.removeEventListener('mousedown', this.#onMouseDown)
    this.#$target.removeEventListener('mouseleave', this.#onMouseLeave)
    this.#$contentWrapper.removeEventListener('mouseenter', this.#onMouseEnter)
    this.#$contentWrapper.removeEventListener('mouseleave', this.#onMouseLeave)
  }

  #subscribeScroll() {
    window.addEventListener('wheel', this.#onScroll, true)
  }

  #unsubscribeScroll() {
    window.removeEventListener('wheel', this.#onScroll, true)
  }

  #isOpen() {
    return this.#$pop.hasAttribute('open')
  }

  #dispatchShowEvent() {
    this.dispatchEvent(new CustomEvent('-show'))
  }

  #dispatchHideEvent() {
    this.dispatchEvent(new CustomEvent('-hide'))
  }

  #onShowReactHandler = () => {
    getReactEventHandler(this, 'on-show')?.()
  }

  #onHideReactHandler = () => {
    getReactEventHandler(this, 'on-hide')?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': TSinchTooltipReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': TSinchTooltipElement,
  }
}
