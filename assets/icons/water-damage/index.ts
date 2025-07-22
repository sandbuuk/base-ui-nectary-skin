import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWaterDamage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-water-damage', IconWaterDamage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-water-damage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-water-damage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-water-damage': TSinchIconReact,
    }
  }
}
