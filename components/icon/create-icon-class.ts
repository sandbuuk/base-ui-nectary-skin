import { updateAttribute } from '../utils'
import iconStylesHtml from './icon-styles.html'

export const createIconClass = (templateHTML: string) => {
  const template = document.createElement('template')

  template.innerHTML = iconStylesHtml + templateHTML

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

    connectedCallback() {
      updateAttribute(this.$svg, 'preserveAspectRatio', 'xMinYMin meet')
    }
  }
}
