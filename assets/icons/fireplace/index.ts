import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFireplace = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fireplace', IconFireplace)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fireplace': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fireplace': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fireplace': TSinchIconReact,
    }
  }
}
