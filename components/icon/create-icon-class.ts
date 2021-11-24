import { getIntegerAttribute, updateIntegerAttribute } from '../utils'
import type { TSinchElementReact } from '../types'

const DEFAULT_SIZE = 16

export const createIconClass = (templateHTML: string) => {
  const template = document.createElement('template')

  template.innerHTML = templateHTML

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
      updateIntegerAttribute(this, 'size', value)
    }

    get size() {
      return getIntegerAttribute(this, 'size')!
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
          updateIntegerAttribute(this.$svg, 'width', newVal)

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
