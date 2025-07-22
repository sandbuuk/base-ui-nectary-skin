import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPolice = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-police', IconLocalPolice)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-police': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-police': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-police': TSinchIconReact,
    }
  }
}
