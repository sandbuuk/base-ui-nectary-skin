import { defineCustomElement, getUid, isAttrTrue, NectaryElement, shouldReduceMotion } from '../utils'
import templateHTML from './template.html'
import type { TSinchSkeletonElement, TSinchSkeletonReact } from './types'
import type { TSinchSkeletonItemBoundingBox } from '../skeleton-item/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const ANIMATION_DURATION = 2000
const BORDER_WIDTH = 1

defineCustomElement('sinch-skeleton', class extends NectaryElement {
  #animation: Animation | null = null
  #shimmer: HTMLElement
  #controller: AbortController | null = null
  #clip: SVGClipPathElement
  #borderWidth = 0
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#shimmer = shadowRoot.querySelector('#shimmer')!
    this.#clip = shadowRoot.querySelector('#clip')!
  }

  connectedCallback(): void {
    const id = getUid()

    this.#shimmer.style.setProperty('clip-path', `url(#${id})`)
    this.#clip.setAttribute('id', id)

    this.#controller = new AbortController()

    if (!shouldReduceMotion()) {
      this.addEventListener('skeleton-item-data', this.#onSkeletonItemData, { signal: this.#controller.signal })
      this.#updateAnimation()
    }
  }

  disconnectedCallback(): void {
    this.#animation!.cancel()
    this.#animation = null
    this.#controller!.abort()
    this.#controller = null
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
    const bb = this.getBoundingClientRect()
    const bgWidth = bb.width * 4

    this.#shimmer.style.setProperty('background-size', `${bgWidth}px`)

    this.#animation = this.#shimmer.animate({
      backgroundPosition: [`0px`, `${bgWidth}px`],
    }, {
      duration: ANIMATION_DURATION,
      iterations: Infinity,
    })
  }

  #onSkeletonItemData = (e: Event) => {
    const bb = this.getBoundingClientRect()
    const data = (e as CustomEvent<TSinchSkeletonItemBoundingBox>).detail
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')

    rect.setAttribute('x', (data.x - bb.x - this.#borderWidth).toString())
    rect.setAttribute('y', (data.y - bb.y - this.#borderWidth).toString())
    rect.setAttribute('width', data.width.toString())
    rect.setAttribute('height', data.height.toString())
    rect.setAttribute('rx', data.radius.toString())

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
