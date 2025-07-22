import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-right', IconBorderRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-right': TSinchIconReact,
    }
  }
}
