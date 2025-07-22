import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWifiLock = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wifi-lock', IconWifiLock)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-lock': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-lock': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wifi-lock': TSinchIconReact,
    }
  }
}
