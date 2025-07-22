import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpaceBar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-space-bar', IconSpaceBar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-space-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-space-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-space-bar': TSinchIconReact,
    }
  }
}
