import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBatteryStd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-battery-std', IconBatteryStd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-battery-std': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-std': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-battery-std': TSinchIconReact,
    }
  }
}
