import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewCompact = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-compact', IconViewCompact)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-compact': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-compact': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-compact': TSinchIconReact,
    }
  }
}
