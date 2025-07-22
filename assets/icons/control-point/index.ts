import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconControlPoint = createIconClass(templateHTML)
defineCustomElement('sinch-icon-control-point', IconControlPoint)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-control-point': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-control-point': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-control-point': TSinchIconReact,
    }
  }
}
