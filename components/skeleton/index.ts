import { attrValueToInteger, defineCustomElement, getCssVar, getUid, isAttrTrue, NectaryElement, shouldReduceMotion } from '../utils'
import templateHTML from './template.html'
import type { TSinchSkeletonElement, TSinchSkeletonReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const ANIMATION_DURATION = 2000
const BORDER_WIDTH = 1

defineCustomElement('sinch-skeleton', class extends NectaryElement {
  #animation: Animation | null = null
  #shimmer: HTMLElement
  #wrapper: HTMLElement
  #slot: HTMLSlotElement
  #controller: AbortController | null = null
  #clip: SVGClipPathElement
  #borderWidth = 0
  #bb: DOMRectReadOnly | null = null
  #observer: IntersectionObserver | null = null
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#shimmer = shadowRoot.querySelector('#shimmer')!
    this.#slot = shadowRoot.querySelector('slot')!
    this.#wrapper = shadowRoot.querySelector('#wrapper')!
    this.#clip = shadowRoot.querySelector('#clip')!
  }

  connectedCallback(): void {
    const id = getUid()

    this.#shimmer.style.setProperty('clip-path', `url(#${id})`)
    this.#clip.setAttribute('id', id)

    this.#controller = new AbortController()

    if (!shouldReduceMotion()) {
      this.#slot.addEventListener('slotchange', this.#onSlotChange, { signal: this.#controller.signal })
      this.#observer = new IntersectionObserver((entries) => {
        this.#bb = entries[0].boundingClientRect

        if (this.#bb.width === 0) {
          return
        }

        this.#updateAnimation()

        for (const child of this.#slot.assignedElements()) {
          this.#handleSkeletonItemData(child)
        }

        this.#observer!.disconnect()
        this.#observer = null
      }, { threshold: 1 })

      this.#observer.observe(this.#wrapper)
    }
  }

  disconnectedCallback(): void {
    this.#animation?.cancel()
    this.#animation = null
    this.#controller!.abort()
    this.#controller = null
    this.#observer?.disconnect()
    this.#observer = null
  }

  static get observedAttributes() {
    return ['card']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'card': {
        this.#borderWidth = isAttrTrue(newVal) ? BORDER_WIDTH : 0

        break
      }
    }
  }

  #updateAnimation() {
    const bb = this.#bb!
    const bgWidth = bb.width * 4

    this.#shimmer.style.setProperty('background-size', `${bgWidth}px`)

    this.#animation = this.#shimmer.animate({
      backgroundPosition: [`0px`, `${bgWidth}px`],
    }, {
      duration: ANIMATION_DURATION,
      iterations: Infinity,
    })
  }

  #onSlotChange = () => {
    this.#clip.innerHTML = ''

    if (this.#bb === null) {
      return
    }

    for (const child of this.#slot.assignedElements()) {
      this.#handleSkeletonItemData(child)
    }
  }

  #handleSkeletonItemData(child: Element) {
    const data = child.getBoundingClientRect()
    const radiusStr = getCssVar(child, '--sinch-local-shape-radius') ?? '0'
    const radius = attrValueToInteger(radiusStr, { min: 0, defaultValue: 0 })!
    const bb = this.#bb!

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    rect.setAttribute('x', (data.x - bb.x - this.#borderWidth).toString())
    rect.setAttribute('y', (data.y - bb.y - this.#borderWidth).toString())
    rect.setAttribute('width', data.width.toString())
    rect.setAttribute('height', data.height.toString())
    rect.setAttribute('rx', radius.toString())

    this.#clip.appendChild(rect)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton': TSinchSkeletonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-skeleton': TSinchSkeletonElement,
  }
}
