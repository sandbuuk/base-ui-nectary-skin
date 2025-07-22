import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSouthEast = createIconClass(templateHTML)
defineCustomElement('sinch-icon-south-east', IconSouthEast)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-south-east': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-south-east': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-south-east': TSinchIconReact,
    }
  }
}
