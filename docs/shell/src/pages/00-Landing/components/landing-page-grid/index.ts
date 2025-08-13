import { defineCustomElement, getBooleanAttribute, NectaryElement, updateBooleanAttribute } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchGridElement, TSinchGridReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('landing-page-grid' as any, class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  set noPadding(noPadding: boolean) {
    updateBooleanAttribute(this, 'nopadding', noPadding)
  }

  get noPadding() {
    return getBooleanAttribute(this, 'nopadding')
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'landing-page-grid': TSinchGridElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'landing-page-grid': TSinchGridReact,
    }
  }
}
