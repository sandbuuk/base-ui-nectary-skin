import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDonutSmall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-donut-small', IconDonutSmall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-donut-small': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-donut-small': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-donut-small': TSinchIconReact,
    }
  }
}
