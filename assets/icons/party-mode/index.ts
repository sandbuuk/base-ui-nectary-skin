import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPartyMode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-party-mode', IconPartyMode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-party-mode': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-party-mode': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-party-mode': TSinchIconReact,
    }
  }
}
