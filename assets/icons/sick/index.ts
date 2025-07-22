import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSick = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sick', IconSick)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sick': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sick': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sick': TSinchIconReact,
    }
  }
}
