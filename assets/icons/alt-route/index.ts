import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAltRoute = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alt-route', IconAltRoute)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alt-route': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alt-route': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alt-route': TSinchIconReact,
    }
  }
}
