import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMasks = createIconClass(templateHTML)
defineCustomElement('sinch-icon-masks', IconMasks)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-masks': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-masks': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-masks': TSinchIconReact,
    }
  }
}
