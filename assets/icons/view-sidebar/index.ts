import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewSidebar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-sidebar', IconViewSidebar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-sidebar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-sidebar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-sidebar': TSinchIconReact,
    }
  }
}
