import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  NectaryElement,
  updateBooleanAttribute,
  getBooleanAttribute,
  isAttrTrue,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchOrientation, TSinchCardTitle } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class CardV2Title extends NectaryElement {
  #$text: NectaryComponentVanilla<'sinch-text'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#title-text')!
  }

  connectedCallback() {
    super.connectedCallback()

    if (!this.hasAttribute('orientation')) {
      this.setAttribute('orientation', 'horizontal')
    }
  }

  static get observedAttributes() {
    return ['text', 'ellipsis']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'ellipsis': {
        const bool = isAttrTrue(newVal)

        updateBooleanAttribute(this.#$text, 'ellipsis', bool)

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get orientation() {
    return getAttribute(this, 'orientation', '') as TSinchOrientation
  }

  set orientation(value: TSinchOrientation) {
    updateAttribute(this, 'orientation', value)
  }

  set ellipsis(isEllipsis: boolean) {
    updateBooleanAttribute(this, 'ellipsis', isEllipsis)
  }

  get ellipsis() {
    return getBooleanAttribute(this, 'ellipsis')
  }
}

defineCustomElement('sinch-card-v2-title', CardV2Title)

declare global {
  interface NectaryComponentMap {
    'sinch-card-v2-title': TSinchCardTitle,
  }

  interface HTMLElementTagNameMap {
    'sinch-card-v2-title': NectaryComponentVanilla<'sinch-card-v2-title'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-v2-title': NectaryComponentReact<'sinch-card-v2-title'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-card-v2-title': NectaryComponentReact<'sinch-card-v2-title'>,
    }
  }
}
