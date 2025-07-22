import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWindPower = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wind-power', IconWindPower)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wind-power': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wind-power': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wind-power': TSinchIconReact,
    }
  }
}
