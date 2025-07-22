import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddBox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-box', IconAddBox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-box': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-box': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-box': TSinchIconReact,
    }
  }
}
