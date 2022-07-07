import {
  defineCustomElement,
  getLiteralAttribute,
  NectaryElement,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { assertColor, colorValues } from './utils'
import type { TSinchAvatarStatusElement, TSinchAvatarStatusReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-avatar-status', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    assertColor(this.getAttribute('color'))
  }

  static get observedAttributes() {
    return ['color']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'color': {
        assertColor(newVal)

        break
      }
    }
  }

  get color() {
    return getLiteralAttribute(this, colorValues, 'color')
  }

  set color(value: string) {
    updateLiteralAttribute(this, colorValues, 'color', value)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar-status': TSinchAvatarStatusReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar-status': TSinchAvatarStatusElement,
  }
}
