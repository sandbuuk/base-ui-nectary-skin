import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGasMeter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gas-meter', IconGasMeter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gas-meter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gas-meter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gas-meter': TSinchIconReact,
    }
  }
}
