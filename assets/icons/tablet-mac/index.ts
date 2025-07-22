import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTabletMac = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tablet-mac', IconTabletMac)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tablet-mac': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tablet-mac': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tablet-mac': TSinchIconReact,
    }
  }
}
