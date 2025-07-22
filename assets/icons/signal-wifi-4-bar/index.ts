import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalWifi4Bar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-wifi-4-bar', IconSignalWifi4Bar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-wifi-4-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-wifi-4-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-wifi-4-bar': TSinchIconReact,
    }
  }
}
