import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLineWeight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-line-weight', IconLineWeight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-line-weight': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-line-weight': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-line-weight': TSinchIconReact,
    }
  }
}
