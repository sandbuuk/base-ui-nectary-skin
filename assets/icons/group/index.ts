import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGroup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-group', IconGroup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-group': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-group': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-group': TSinchIconReact,
    }
  }
}
