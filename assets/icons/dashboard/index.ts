import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDashboard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dashboard', IconDashboard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dashboard': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dashboard': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dashboard': TSinchIconReact,
    }
  }
}
