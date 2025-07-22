import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWrongLocation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wrong-location', IconWrongLocation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wrong-location': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wrong-location': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wrong-location': TSinchIconReact,
    }
  }
}
