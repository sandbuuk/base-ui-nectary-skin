import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStayCurrentLandscape = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stay-current-landscape', IconStayCurrentLandscape)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stay-current-landscape': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-current-landscape': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stay-current-landscape': TSinchIconReact,
    }
  }
}
