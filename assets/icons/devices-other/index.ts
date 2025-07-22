import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDevicesOther = createIconClass(templateHTML)
defineCustomElement('sinch-icon-devices-other', IconDevicesOther)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-devices-other': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-devices-other': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-devices-other': TSinchIconReact,
    }
  }
}
