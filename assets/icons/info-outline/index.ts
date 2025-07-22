import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInfoOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-info-outline', IconInfoOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-info-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-info-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-info-outline': TSinchIconReact,
    }
  }
}
