import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBackpack = createIconClass(templateHTML)
defineCustomElement('sinch-icon-backpack', IconBackpack)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-backpack': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backpack': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-backpack': TSinchIconReact,
    }
  }
}
