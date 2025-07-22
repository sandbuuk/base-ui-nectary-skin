import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOutdoorGrill = createIconClass(templateHTML)
defineCustomElement('sinch-icon-outdoor-grill', IconOutdoorGrill)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-outdoor-grill': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outdoor-grill': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-outdoor-grill': TSinchIconReact,
    }
  }
}
