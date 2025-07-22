import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterCenterFocus = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-center-focus', IconFilterCenterFocus)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-center-focus': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-center-focus': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-center-focus': TSinchIconReact,
    }
  }
}
