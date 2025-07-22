import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-circle', IconAddCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-circle': TSinchIconReact,
    }
  }
}
