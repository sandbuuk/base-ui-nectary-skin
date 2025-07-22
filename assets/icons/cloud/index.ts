import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloud = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cloud', IconCloud)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cloud': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cloud': TSinchIconReact,
    }
  }
}
