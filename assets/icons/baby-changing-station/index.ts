import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBabyChangingStation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-baby-changing-station', IconBabyChangingStation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-baby-changing-station': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-baby-changing-station': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-baby-changing-station': TSinchIconReact,
    }
  }
}
