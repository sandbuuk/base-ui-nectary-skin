import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderHorizontal = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-horizontal', IconBorderHorizontal)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-horizontal': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-horizontal': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-horizontal': TSinchIconReact,
    }
  }
}
