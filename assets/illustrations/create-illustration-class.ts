import { getIntegerAttribute, getLiteralAttribute, NectaryElement, updateAttribute, updateIntegerAttribute, updateLiteralAttribute } from '../utils'
import illustrationStylesHtml from './illustration-styles.html'
import { backgroundValues, valignValues, halignValues } from './utils'
import type { TSinchIllustrationBackground, TSinchIllustrationVAlign, TSinchIllustrationHAlign } from './types'

const DEFAULT_SIZE = 256
const MIN_SIZE = 16
const MAX_SIZE = 2048

export const createIllustrationClass = (templateHTML: string): CustomElementConstructor => {
  const template = document.createElement('template')

  template.innerHTML = `${illustrationStylesHtml}<div id="wrapper">${templateHTML}</div>`

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
      // Validation is handled in attributeChangeCallback
      updateAttribute(this, 'size', value)
    }

    get size() {
      return getIntegerAttribute(this, 'size', DEFAULT_SIZE)
    }

    get background(): TSinchIllustrationBackground | null {
      return getLiteralAttribute(this, backgroundValues, 'background', null)
    }

    set background(value: TSinchIllustrationBackground | null) {
      updateLiteralAttribute(this, backgroundValues, 'background', value)
    }

    get valign(): TSinchIllustrationVAlign | null {
      return getLiteralAttribute(this, valignValues, 'valign', null)
    }

    set valign(value: TSinchIllustrationVAlign | null) {
      updateLiteralAttribute(this, valignValues, 'valign', value)
    }

    get halign(): TSinchIllustrationHAlign | null {
      return getLiteralAttribute(this, halignValues, 'halign', null)
    }

    set halign(value: TSinchIllustrationHAlign | null) {
      updateLiteralAttribute(this, halignValues, 'halign', value)
    }

    connectedCallback() {
      updateAttribute(this.$svg, 'preserveAspectRatio', 'xMinYMin meet')

      if (!this.hasAttribute('size')) {
        updateAttribute(this, 'size', DEFAULT_SIZE)
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
