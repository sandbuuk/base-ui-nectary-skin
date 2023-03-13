import { defineCustomElement, getCssVar, NectaryElement, attrValueToInteger, shouldReduceMotion } from '../utils'
import templateHTML from './template.html'
import type { TSinchSkeletonItemElement, TSinchSkeletonItemBoundingBox, TSinchSkeletonItemReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-skeleton-item', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(): void {
    if (!shouldReduceMotion()) {
      requestAnimationFrame(() => {
        const { x, y, width, height } = this.getBoundingClientRect()
        const radiusStr = getCssVar(this, '--sinch-shape-radius') ?? '0'
        const radius = attrValueToInteger(radiusStr, { min: 0, defaultValue: 0 })!

        this.dispatchEvent(
          new CustomEvent<TSinchSkeletonItemBoundingBox>('skeleton-item-data', {
            bubbles: true,
            detail: {
              x,
              y,
              width,
              height,
              radius,
            },
          })
        )
      })
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton-item': TSinchSkeletonItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-skeleton-item': TSinchSkeletonItemElement,
  }
}
