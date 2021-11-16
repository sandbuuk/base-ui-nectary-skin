import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../tooltip'
import '../icon/tooltip'
import type { TSinchTooltip } from '../tooltip'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input-tooltip', class extends HTMLElement {
  $tooltip: HTMLElement & TSinchTooltip

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$tooltip = shadowRoot.querySelector('sinch-tooltip')!
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
    return getAttribute(this, 'orientation') as TSinchInputTooltip['orientation'] | undefined
  }

  set orientation(value: TSinchInputTooltip['orientation'] | undefined) {
    updateAttribute(this, 'orientation', value)
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        updateAttribute(this.$tooltip, 'text', newVal)

        break
      }

      case 'width': {
        updateAttribute(this.$tooltip, 'width', newVal)

        break
      }

      case 'inverted': {
        updateAttribute(this.$tooltip, 'inverted', newVal)

        break
      }

      case 'orientation': {
        updateAttribute(this.$tooltip, 'orientation', newVal)
      }
    }
  }
})

export type TSinchInputTooltip = TSinchTooltip

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input-tooltip': TSinchInputTooltip,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input-tooltip': HTMLElement & TSinchInputTooltip,
  }
}
