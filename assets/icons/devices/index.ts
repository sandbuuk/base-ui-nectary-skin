import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDevices = createIconClass(templateHTML)
defineCustomElement('sinch-icon-devices', IconDevices)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-devices': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-devices': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-devices': TSinchIconReact,
    }
  }
}
