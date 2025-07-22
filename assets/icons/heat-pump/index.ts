import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHeatPump = createIconClass(templateHTML)
defineCustomElement('sinch-icon-heat-pump', IconHeatPump)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-heat-pump': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-heat-pump': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-heat-pump': TSinchIconReact,
    }
  }
}
