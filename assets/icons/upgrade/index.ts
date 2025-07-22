import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUpgrade = createIconClass(templateHTML)
defineCustomElement('sinch-icon-upgrade', IconUpgrade)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-upgrade': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-upgrade': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-upgrade': TSinchIconReact,
    }
  }
}
