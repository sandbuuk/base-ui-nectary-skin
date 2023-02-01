import {
  attrValueToPixels,
  getBooleanAttribute,
  getIntegerAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import iconStylesHtml from './icon-styles.html'

const DEFAULT_SIZE = 48
const MIN_SIZE = 4
const MAX_SIZE = 256

export const createIconClass = (templateHTML: string): CustomElementConstructor => {
  const template = document.createElement('template')

  template.innerHTML = iconStylesHtml + templateHTML

  return class extends NectaryElement {
    $svg: SVGElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow()

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.$svg = shadowRoot.querySelector('svg')!
    }

    static get observedAttributes() {
      return ['size']
    }

    set size(value: number) {
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
      updateAttribute(this.$svg, 'preserveAspectRatio', 'xMinYMin meet')
    }

    attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
      switch (name) {
        case 'size': {
          this.$svg.style.height = attrValueToPixels(newVal, { min: MIN_SIZE, max: MAX_SIZE })

          break
        }
      }
    }
  }
}
