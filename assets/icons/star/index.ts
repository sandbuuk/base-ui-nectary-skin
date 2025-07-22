import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-star', IconStar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-star': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-star': TSinchIconReact,
    }
  }
}
