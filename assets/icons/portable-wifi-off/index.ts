import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPortableWifiOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-portable-wifi-off', IconPortableWifiOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-portable-wifi-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-portable-wifi-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-portable-wifi-off': TSinchIconReact,
    }
  }
}
