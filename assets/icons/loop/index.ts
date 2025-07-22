import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLoop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-loop', IconLoop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-loop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-loop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-loop': TSinchIconReact,
    }
  }
}
