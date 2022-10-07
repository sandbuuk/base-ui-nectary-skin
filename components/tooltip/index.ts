import '../text'
import '../pop'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
  rectOverlap,
} from '../utils'
import { TooltipState } from '../utils/animation'
import templateHTML from './template.html'
import { assertOrientation, getPopOrientation, orientationValues } from './utils'
import type { TSinchPopElement } from '../pop/types'
import type { TRect } from '../types'
import type { TSinchTooltipElement, TSinchTooltipOrientation, TSinchTooltipReact } from './types'

const TIP_SIZE = 8
const SHOW_DELAY = 1000
const HIDE_DELAY = 100
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
    this.#shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    this.#tooltipState = new TooltipState({
      showDelay: SHOW_DELAY,
      hideDelay: this.#shouldReduceMotion ? HIDE_DELAY + ANIMATION_DURATION : HIDE_DELAY,
      hideAnimationDuration: this.#shouldReduceMotion ? 0 : ANIMATION_DURATION,
      onShow: this.#onShow,
      onHideStart: this.#onHideStart,
      onHideEnd: this.#onHideEnd,
    })
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#$pop.addEventListener('-close', this.#onPopClose, { signal })
    this.#$target.addEventListener('mousedown', this.#onMouseDown, { signal })
    this.#$target.addEventListener('mouseenter', this.#onMouseEnter, { signal })
    this.#$target.addEventListener('mouseleave', this.#onMouseLeave, { signal })
    this.#$contentWrapper.addEventListener('mouseenter', this.#onMouseEnter, { signal })
    this.#$contentWrapper.addEventListener('mouseleave', this.#onMouseLeave, { signal })

    updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#tooltipState.destroy()
  }

  static get observedAttributes() {
    return ['text', 'orientation']
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get inverted() {
    return getBooleanAttribute(this, 'inverted')
  }

  set inverted(isInverted: boolean) {
    updateBooleanAttribute(this, 'inverted', isInverted)
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'top')
  }

  set orientation(value: TSinchTooltipOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get footprintRect(): TRect {
    return this.#$pop.footprintRect
  }

  get tooltipRect(): TRect {
    return this.#$pop.popoverRect
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$tooltipText.textContent = newVal

        break
      }

      case 'orientation': {
        assertOrientation(newVal)
        updateAttribute(this.#$pop, 'orientation', getPopOrientation(newVal))

        if (this.#isOpen()) {
          this.#resetTipOrientation()
          this.#updateTipOrientation()
        }

        break
      }
    }
  }

  #onMouseDown = () => {
    this.#tooltipState.interrupt()
  }

  #onPopClose = () => {
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

  #onShow = () => {
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

  #onHideStart = () => {
    this.#animation!.updatePlaybackRate(-1)
    this.#animation!.play()
  }

  #onHideEnd = () => {
    this.#animation!.finish()
    this.#resetTipOrientation()
    updateBooleanAttribute(this.#$pop, 'open', false)
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

  #isOpen() {
    return this.#$pop.hasAttribute('open')
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
