import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalWifi4BarLock = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-wifi-4-bar-lock', IconSignalWifi4BarLock)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-wifi-4-bar-lock': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-wifi-4-bar-lock': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-wifi-4-bar-lock': TSinchIconReact,
    }
  }
}
