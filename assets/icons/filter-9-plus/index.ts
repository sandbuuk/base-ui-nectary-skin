import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilter9Plus = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-9-plus', IconFilter9Plus)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-9-plus': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-9-plus': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-9-plus': TSinchIconReact,
    }
  }
}
