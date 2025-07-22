import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRoundedCorner = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rounded-corner', IconRoundedCorner)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rounded-corner': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rounded-corner': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rounded-corner': TSinchIconReact,
    }
  }
}
