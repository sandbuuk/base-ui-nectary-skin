import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBurstMode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-burst-mode', IconBurstMode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-burst-mode': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-burst-mode': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-burst-mode': TSinchIconReact,
    }
  }
}
