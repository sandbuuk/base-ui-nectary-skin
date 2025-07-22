import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsMma = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-mma', IconSportsMma)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-mma': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-mma': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-mma': TSinchIconReact,
    }
  }
}
