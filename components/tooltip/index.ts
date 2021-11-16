import {
  attrValueToPixels,
  defineCustomElement,
  getBooleanAttribute,
  getIntegerAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../icon/tooltip'

const orientationValues = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tooltip', class extends HTMLElement {
  $tooltipText: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

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
    return getLiteralAttribute(this, orientationValues, 'orientation')
  }

  set orientation(value: TSinchTooltipOrientation | undefined) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
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

type TSinchTooltipOrientation = typeof orientationValues[number]

export type TSinchTooltip = {
  text: string,
  width?: number,
  inverted?: boolean,
  orientation?: TSinchTooltipOrientation,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': TSinchTooltip,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': HTMLElement & TSinchTooltip,
  }
}
