import { getIntegerAttribute, updateAttribute, updateIntegerAttribute } from '../utils'
import iconStylesHtml from './icon-styles.html'
import type { TSinchElementReact } from '../types'

const DEFAULT_SIZE = 16
const MIN_SIZE = 4
const MAX_SIZE = 256

export const createIconClass = (templateHTML: string) => {
  const template = document.createElement('template')

  template.innerHTML = iconStylesHtml + templateHTML

  return class extends HTMLElement {
    $svg: SVGElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow({
        mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      })

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.$svg = shadowRoot.querySelector('svg')!
    }

    static get observedAttributes() {
      return ['size']
    }

    set size(value: number) {
      // Validation is handled in attributeChangeCallback
      updateAttribute(this, 'size', value)
    }

    get size() {
      return getIntegerAttribute(this, 'size', DEFAULT_SIZE)
    }

    connectedCallback() {
      if (!this.$svg.hasAttribute('preserveAspectRatio')) {
        this.$svg.setAttribute('preserveAspectRatio', 'xMinYMin meet')
      }

      if (!this.hasAttribute('size')) {
        this.size = DEFAULT_SIZE
      }
    }

    attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
      switch (name) {
        case 'size': {
          updateIntegerAttribute(this.$svg, 'width', newVal, { min: MIN_SIZE, max: MAX_SIZE })

          break
        }
      }
    }
  }
}

export type TSinchIconElement = HTMLElement & {
  size: number,
}
export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  size?: number,
}
