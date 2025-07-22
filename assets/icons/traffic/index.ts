import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTraffic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-traffic', IconTraffic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-traffic': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-traffic': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-traffic': TSinchIconReact,
    }
  }
}
