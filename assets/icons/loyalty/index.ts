import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLoyalty = createIconClass(templateHTML)
defineCustomElement('sinch-icon-loyalty', IconLoyalty)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-loyalty': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-loyalty': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-loyalty': TSinchIconReact,
    }
  }
}
