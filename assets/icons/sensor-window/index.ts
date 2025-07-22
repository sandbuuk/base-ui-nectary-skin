import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSensorWindow = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sensor-window', IconSensorWindow)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-window': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-window': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sensor-window': TSinchIconReact,
    }
  }
}
