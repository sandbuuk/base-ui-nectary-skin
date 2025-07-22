import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRedo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-redo', IconRedo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-redo': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-redo': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-redo': TSinchIconReact,
    }
  }
}
