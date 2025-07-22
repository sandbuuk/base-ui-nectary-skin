import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconControlPointDuplicate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-control-point-duplicate', IconControlPointDuplicate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-control-point-duplicate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-control-point-duplicate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-control-point-duplicate': TSinchIconReact,
    }
  }
}
