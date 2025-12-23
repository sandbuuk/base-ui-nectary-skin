import {
  getBooleanAttribute,
  getIntegerAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import logoStylesHtml from './logo-styles.html?raw'

const DEFAULT_SIZE = 16
const MIN_SIZE = 4
const MAX_SIZE = 256

export const createLogoClass = (templateHTML: string): CustomElementConstructor => {
  const template = document.createElement('template')

  template.innerHTML = logoStylesHtml + templateHTML

  return class extends NectaryElement {
    $svg: SVGElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow()

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.$svg = shadowRoot.querySelector('svg')!
    }

    static get observedAttributes() {
      return ['size', 'alt']
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

    set alt(value: string | null) {
      updateAttribute(this, 'alt', value)
    }

    get alt() {
      return this.getAttribute('alt')
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
        case 'alt': {
          if (newVal != null && newVal.length > 0) {
            this.$svg.setAttribute('aria-label', newVal)
            this.$svg.removeAttribute('aria-labelledby')
          } else {
            this.$svg.removeAttribute('aria-label')

            // Restore aria-labelledby if it exists in the template
            const title = this.$svg.querySelector('title')

            if (title != null && title.id != null && title.id.length > 0) {
              this.$svg.setAttribute('aria-labelledby', title.id)
            }
          }

          break
        }
      }
    }
  }
}
