import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsBus = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-bus', IconDirectionsBus)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-bus': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-bus': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-bus': TSinchIconReact,
    }
  }
}
