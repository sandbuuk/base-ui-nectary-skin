import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-home-work', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-home-work': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-work': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-work': TSinchIconReact,
    }
  }
}
