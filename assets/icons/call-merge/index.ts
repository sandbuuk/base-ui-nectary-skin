import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallMerge = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-merge', IconCallMerge)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-merge': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-merge': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-merge': TSinchIconReact,
    }
  }
}
