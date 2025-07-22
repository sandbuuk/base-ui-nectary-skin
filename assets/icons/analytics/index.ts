import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAnalytics = createIconClass(templateHTML)
defineCustomElement('sinch-icon-analytics', IconAnalytics)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-analytics': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-analytics': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-analytics': TSinchIconReact,
    }
  }
}
