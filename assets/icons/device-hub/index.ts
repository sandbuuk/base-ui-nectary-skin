import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeviceHub = createIconClass(templateHTML)
defineCustomElement('sinch-icon-device-hub', IconDeviceHub)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-device-hub': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-device-hub': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-device-hub': TSinchIconReact,
    }
  }
}
