import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBatteryUnknown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-battery-unknown', IconBatteryUnknown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-battery-unknown': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-unknown': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-battery-unknown': TSinchIconReact,
    }
  }
}
