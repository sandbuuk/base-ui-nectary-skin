import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDomain = createIconClass(templateHTML)
defineCustomElement('sinch-icon-domain', IconDomain)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-domain': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-domain': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-domain': TSinchIconReact,
    }
  }
}
