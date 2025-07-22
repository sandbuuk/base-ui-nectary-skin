import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMailOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mail-outline', IconMailOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mail-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mail-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mail-outline': TSinchIconReact,
    }
  }
}
