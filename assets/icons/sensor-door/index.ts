import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSensorDoor = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sensor-door', IconSensorDoor)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-door': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-door': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sensor-door': TSinchIconReact,
    }
  }
}
