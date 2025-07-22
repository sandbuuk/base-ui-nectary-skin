import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOilBarrel = createIconClass(templateHTML)
defineCustomElement('sinch-icon-oil-barrel', IconOilBarrel)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-oil-barrel': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-oil-barrel': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-oil-barrel': TSinchIconReact,
    }
  }
}
