import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLaptopMac = createIconClass(templateHTML)
defineCustomElement('sinch-icon-laptop-mac', IconLaptopMac)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-laptop-mac': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-laptop-mac': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-laptop-mac': TSinchIconReact,
    }
  }
}
