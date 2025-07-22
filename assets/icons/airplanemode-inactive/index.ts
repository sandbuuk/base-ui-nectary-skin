import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAirplanemodeInactive = createIconClass(templateHTML)
defineCustomElement('sinch-icon-airplanemode-inactive', IconAirplanemodeInactive)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-airplanemode-inactive': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-airplanemode-inactive': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-airplanemode-inactive': TSinchIconReact,
    }
  }
}
