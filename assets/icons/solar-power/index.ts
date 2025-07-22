import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSolarPower = createIconClass(templateHTML)
defineCustomElement('sinch-icon-solar-power', IconSolarPower)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-solar-power': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-solar-power': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-solar-power': TSinchIconReact,
    }
  }
}
