import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWorkOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-work-outline', IconWorkOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-work-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-work-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-work-outline': TSinchIconReact,
    }
  }
}
