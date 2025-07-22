import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChargingStation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-charging-station', IconChargingStation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-charging-station': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-charging-station': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-charging-station': TSinchIconReact,
    }
  }
}
