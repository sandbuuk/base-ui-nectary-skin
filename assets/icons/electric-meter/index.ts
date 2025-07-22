import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricMeter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-meter', IconElectricMeter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-meter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-meter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-meter': TSinchIconReact,
    }
  }
}
