import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTripOrigin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-trip-origin', IconTripOrigin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-trip-origin': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trip-origin': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-trip-origin': TSinchIconReact,
    }
  }
}
