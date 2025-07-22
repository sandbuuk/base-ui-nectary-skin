import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPolymer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-polymer', IconPolymer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-polymer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-polymer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-polymer': TSinchIconReact,
    }
  }
}
