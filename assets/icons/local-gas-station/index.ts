import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalGasStation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-gas-station', IconLocalGasStation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-gas-station': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-gas-station': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-gas-station': TSinchIconReact,
    }
  }
}
