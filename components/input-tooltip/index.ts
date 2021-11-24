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

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input-tooltip', class extends HTMLElement {
  $tooltip: HTMLElementTagNameMap['sinch-tooltip']

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

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
    return getAttribute(this, 'orientation')
  }

  set orientation(value: string | undefined) {
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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input-tooltip': IntrinsicElements['sinch-tooltip'],
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input-tooltip': HTMLElementTagNameMap['sinch-tooltip'],
  }
}
