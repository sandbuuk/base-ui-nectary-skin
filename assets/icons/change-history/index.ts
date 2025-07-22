import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChangeHistory = createIconClass(templateHTML)
defineCustomElement('sinch-icon-change-history', IconChangeHistory)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-change-history': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-change-history': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-change-history': TSinchIconReact,
    }
  }
}
