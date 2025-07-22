import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocationDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-location-disabled', IconLocationDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-location-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-location-disabled': TSinchIconReact,
    }
  }
}
