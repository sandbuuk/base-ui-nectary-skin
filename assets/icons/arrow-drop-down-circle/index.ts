import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowDropDownCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-drop-down-circle', IconArrowDropDownCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-drop-down-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-drop-down-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-drop-down-circle': TSinchIconReact,
    }
  }
}
