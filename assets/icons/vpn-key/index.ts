import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVpnKey = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vpn-key', IconVpnKey)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vpn-key': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vpn-key': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vpn-key': TSinchIconReact,
    }
  }
}
