import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHomeWork = createIconClass(templateHTML)
defineCustomElement('sinch-icon-home-work', IconHomeWork)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-home-work': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-work': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-home-work': TSinchIconReact,
    }
  }
}
