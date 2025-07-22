import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEnergySavingsLeaf = createIconClass(templateHTML)
defineCustomElement('sinch-icon-energy-savings-leaf', IconEnergySavingsLeaf)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-energy-savings-leaf': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-energy-savings-leaf': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-energy-savings-leaf': TSinchIconReact,
    }
  }
}
