import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLaptopChromebook = createIconClass(templateHTML)
defineCustomElement('sinch-icon-laptop-chromebook', IconLaptopChromebook)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-laptop-chromebook': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-laptop-chromebook': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-laptop-chromebook': TSinchIconReact,
    }
  }
}
