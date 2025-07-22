import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalWifiOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-wifi-off', IconSignalWifiOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-wifi-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-wifi-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-wifi-off': TSinchIconReact,
    }
  }
}
