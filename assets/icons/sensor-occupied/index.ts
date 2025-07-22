import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSensorOccupied = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sensor-occupied', IconSensorOccupied)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-occupied': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-occupied': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sensor-occupied': TSinchIconReact,
    }
  }
}
