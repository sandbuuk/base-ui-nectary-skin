import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBatteryAlert = createIconClass(templateHTML)
defineCustomElement('sinch-icon-battery-alert', IconBatteryAlert)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-battery-alert': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-alert': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-battery-alert': TSinchIconReact,
    }
  }
}
