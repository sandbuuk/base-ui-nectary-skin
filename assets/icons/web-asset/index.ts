import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWebAsset = createIconClass(templateHTML)
defineCustomElement('sinch-icon-web-asset', IconWebAsset)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-web-asset': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-web-asset': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-web-asset': TSinchIconReact,
    }
  }
}
