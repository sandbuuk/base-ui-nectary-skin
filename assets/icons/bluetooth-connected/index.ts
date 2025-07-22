import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBluetoothConnected = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bluetooth-connected', IconBluetoothConnected)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bluetooth-connected': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bluetooth-connected': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bluetooth-connected': TSinchIconReact,
    }
  }
}
