import { getBooleanAttribute, getIntegerAttribute, updateAttribute, updateBooleanAttribute, updateIntegerAttribute } from '../utils'
import logoStylesHtml from './logo-styles.html'

const DEFAULT_SIZE = 16
const MIN_SIZE = 4
const MAX_SIZE = 256

export const createLogoClass = (templateHTML: string) => {
  const template = document.createElement('template')

  template.innerHTML = logoStylesHtml + templateHTML

  return class extends HTMLElement {
    $svg: SVGElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow({
        mode: 'closed',
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

    set inverted(isInverted: boolean) {
      updateBooleanAttribute(this, 'inverted', isInverted)
    }

    get inverted() {
      return getBooleanAttribute(this, 'inverted')
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
          updateIntegerAttribute(this.$svg, 'height', newVal, { min: MIN_SIZE, max: MAX_SIZE })

          break
        }
      }
    }
  }
}
