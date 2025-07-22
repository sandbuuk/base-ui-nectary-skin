import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhonelinkSetup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phonelink-setup', IconPhonelinkSetup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink-setup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink-setup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phonelink-setup': TSinchIconReact,
    }
  }
}
