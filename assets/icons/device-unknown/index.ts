import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeviceUnknown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-device-unknown', IconDeviceUnknown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-device-unknown': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-device-unknown': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-device-unknown': TSinchIconReact,
    }
  }
}
