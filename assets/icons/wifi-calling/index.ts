import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWifiCalling = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wifi-calling', IconWifiCalling)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-calling': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-calling': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wifi-calling': TSinchIconReact,
    }
  }
}
