import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUsb = createIconClass(templateHTML)
defineCustomElement('sinch-icon-usb', IconUsb)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-usb': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-usb': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-usb': TSinchIconReact,
    }
  }
}
