import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInfo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-info', IconInfo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-info': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-info': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-info': TSinchIconReact,
    }
  }
}
