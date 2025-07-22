import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHelpOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-help-outline', IconHelpOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-help-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-help-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-help-outline': TSinchIconReact,
    }
  }
}
