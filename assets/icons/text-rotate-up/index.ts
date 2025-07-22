import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextRotateUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-rotate-up', IconTextRotateUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotate-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotate-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-rotate-up': TSinchIconReact,
    }
  }
}
