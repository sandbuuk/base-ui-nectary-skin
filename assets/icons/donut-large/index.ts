import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDonutLarge = createIconClass(templateHTML)
defineCustomElement('sinch-icon-donut-large', IconDonutLarge)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-donut-large': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-donut-large': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-donut-large': TSinchIconReact,
    }
  }
}
