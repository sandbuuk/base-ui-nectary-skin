import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGpsNotFixed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gps-not-fixed', IconGpsNotFixed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gps-not-fixed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gps-not-fixed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gps-not-fixed': TSinchIconReact,
    }
  }
}
