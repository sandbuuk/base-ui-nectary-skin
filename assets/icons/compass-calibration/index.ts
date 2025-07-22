import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCompassCalibration = createIconClass(templateHTML)
defineCustomElement('sinch-icon-compass-calibration', IconCompassCalibration)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-compass-calibration': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-compass-calibration': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-compass-calibration': TSinchIconReact,
    }
  }
}
