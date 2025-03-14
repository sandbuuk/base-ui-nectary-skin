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
import type { TSinchOrientation, TSinchCardTitleElement, TSinchCardTitleReact } from './types'
import type { TSinchTextElement } from '../text/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card-v2-title', class extends NectaryElement {
  #$text: TSinchTextElement

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
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-card-v2-title': TSinchCardTitleElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-v2-title': TSinchCardTitleReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-v2-title': TSinchCardTitleReact,
    }
  }
}
