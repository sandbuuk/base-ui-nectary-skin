import {
  attrValueToPixels,
  defineCustomElement,
  getBooleanAttribute,
  getIntegerAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  getRect,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import { orientationValues } from './utils'
import type { TSinchTooltipElement, TSinchTooltipOrientation, TSinchTooltipReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tooltip', class extends NectaryElement {
  $tooltipText: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$tooltipText = shadowRoot.querySelector('#text')!
  }

  static get observedAttributes() {
    return ['text', 'width']
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get width() {
    return getIntegerAttribute(this, 'width', null)
  }

  set width(value: number | null) {
    // Parsing is handled in attributeChangedCallback
    updateAttribute(this, 'width', value)
  }

  get inverted() {
    return getBooleanAttribute(this, 'inverted')
  }

  set inverted(isInverted: boolean) {
    updateBooleanAttribute(this, 'inverted', isInverted)
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'top')
  }

  set orientation(value: TSinchTooltipOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get tooltipRect() {
    return getRect(this.$tooltipText)
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$tooltipText.textContent = newVal

        break
      }

      case 'width': {
        this.$tooltipText.style.maxWidth = attrValueToPixels(newVal)

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': TSinchTooltipReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': TSinchTooltipElement,
  }
}
