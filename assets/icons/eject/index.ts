import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEject = createIconClass(templateHTML)
defineCustomElement('sinch-icon-eject', IconEject)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-eject': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-eject': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-eject': TSinchIconReact,
    }
  }
}
