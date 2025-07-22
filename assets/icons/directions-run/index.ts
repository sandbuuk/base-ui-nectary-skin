import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsRun = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-run', IconDirectionsRun)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-run': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-run': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-run': TSinchIconReact,
    }
  }
}
