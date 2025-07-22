import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextRotateVertical = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-rotate-vertical', IconTextRotateVertical)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotate-vertical': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotate-vertical': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-rotate-vertical': TSinchIconReact,
    }
  }
}
