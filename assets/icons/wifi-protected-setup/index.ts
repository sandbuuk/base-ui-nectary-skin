import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWifiProtectedSetup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wifi-protected-setup', IconWifiProtectedSetup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-protected-setup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-protected-setup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wifi-protected-setup': TSinchIconReact,
    }
  }
}
