import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderTop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-top', IconBorderTop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-top': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-top': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-top': TSinchIconReact,
    }
  }
}
