import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRiceBowl = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rice-bowl', IconRiceBowl)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rice-bowl': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rice-bowl': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rice-bowl': TSinchIconReact,
    }
  }
}
