import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUmbrella = createIconClass(templateHTML)
defineCustomElement('sinch-icon-umbrella', IconUmbrella)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-umbrella': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-umbrella': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-umbrella': TSinchIconReact,
    }
  }
}
