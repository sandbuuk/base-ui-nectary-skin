import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderAll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-all', IconBorderAll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-all': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-all': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-all': TSinchIconReact,
    }
  }
}
