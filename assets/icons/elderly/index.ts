import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElderly = createIconClass(templateHTML)
defineCustomElement('sinch-icon-elderly', IconElderly)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-elderly': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-elderly': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-elderly': TSinchIconReact,
    }
  }
}
