import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderBottom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-bottom', IconBorderBottom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-bottom': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-bottom': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-bottom': TSinchIconReact,
    }
  }
}
