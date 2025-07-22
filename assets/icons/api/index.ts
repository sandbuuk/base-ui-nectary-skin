import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconApi = createIconClass(templateHTML)
defineCustomElement('sinch-icon-api', IconApi)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-api': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-api': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-api': TSinchIconReact,
    }
  }
}
