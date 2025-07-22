import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHelpCenter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-help-center', IconHelpCenter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-help-center': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-help-center': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-help-center': TSinchIconReact,
    }
  }
}
