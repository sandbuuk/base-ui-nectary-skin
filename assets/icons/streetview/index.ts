import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStreetview = createIconClass(templateHTML)
defineCustomElement('sinch-icon-streetview', IconStreetview)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-streetview': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-streetview': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-streetview': TSinchIconReact,
    }
  }
}
