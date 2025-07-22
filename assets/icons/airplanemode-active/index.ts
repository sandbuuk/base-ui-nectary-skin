import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAirplanemodeActive = createIconClass(templateHTML)
defineCustomElement('sinch-icon-airplanemode-active', IconAirplanemodeActive)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-airplanemode-active': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-airplanemode-active': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-airplanemode-active': TSinchIconReact,
    }
  }
}
