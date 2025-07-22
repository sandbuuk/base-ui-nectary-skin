import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStayPrimaryLandscape = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stay-primary-landscape', IconStayPrimaryLandscape)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stay-primary-landscape': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-primary-landscape': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stay-primary-landscape': TSinchIconReact,
    }
  }
}
