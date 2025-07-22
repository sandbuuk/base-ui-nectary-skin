import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAdjust = createIconClass(templateHTML)
defineCustomElement('sinch-icon-adjust', IconAdjust)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-adjust': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-adjust': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-adjust': TSinchIconReact,
    }
  }
}
