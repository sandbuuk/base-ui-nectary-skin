import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalConvenienceStore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-convenience-store', IconLocalConvenienceStore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-convenience-store': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-convenience-store': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-convenience-store': TSinchIconReact,
    }
  }
}
