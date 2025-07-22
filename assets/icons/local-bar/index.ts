import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalBar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-bar', IconLocalBar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-bar': TSinchIconReact,
    }
  }
}
