import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEditLocation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-edit-location', IconEditLocation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-edit-location': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-edit-location': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-edit-location': TSinchIconReact,
    }
  }
}
