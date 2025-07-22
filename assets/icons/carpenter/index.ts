import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCarpenter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-carpenter', IconCarpenter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-carpenter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-carpenter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-carpenter': TSinchIconReact,
    }
  }
}
