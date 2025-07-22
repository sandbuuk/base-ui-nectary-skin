import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArchive = createIconClass(templateHTML)
defineCustomElement('sinch-icon-archive', IconArchive)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-archive': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-archive': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-archive': TSinchIconReact,
    }
  }
}
