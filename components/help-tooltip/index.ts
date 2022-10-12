import '../tooltip'
import '../icons/help-outline'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTooltipElement } from '../tooltip/types'
import type { TSinchHelpTooltipElement, TSinchHelpTooltipReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-help-tooltip', class extends NectaryElement {
  #$tooltip: TSinchTooltipElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$tooltip = shadowRoot.querySelector('sinch-tooltip')!
  }

  static get observedAttributes() {
    return ['text', 'width', 'orientation', 'inverted']
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get width() {
    return getIntegerAttribute(this, 'width')
  }

  set width(value: number | undefined) {
    updateIntegerAttribute(this, 'width', value)
  }

  get inverted() {
    return getBooleanAttribute(this, 'inverted')
  }

  set inverted(isInverted: boolean | undefined) {
    updateBooleanAttribute(this, 'inverted', isInverted)
  }

  get orientation() {
    return getAttribute(this, 'orientation', 'top')
  }

  set orientation(value: string) {
    updateAttribute(this, 'orientation', value)
  }

  get footprintRect() {
    return this.#$tooltip.footprintRect
  }

  get tooltipRect() {
    return this.#$tooltip.tooltipRect
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    updateAttribute(this.#$tooltip, name, newVal)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-help-tooltip': TSinchHelpTooltipReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-help-tooltip': TSinchHelpTooltipElement,
  }
}
