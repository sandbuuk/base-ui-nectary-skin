import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewWeek = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-week', IconViewWeek)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-week': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-week': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-week': TSinchIconReact,
    }
  }
}
