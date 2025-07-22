import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBatteryChargingFull = createIconClass(templateHTML)
defineCustomElement('sinch-icon-battery-charging-full', IconBatteryChargingFull)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-battery-charging-full': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-charging-full': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-battery-charging-full': TSinchIconReact,
    }
  }
}
