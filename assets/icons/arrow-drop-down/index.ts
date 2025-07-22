import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowDropDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-drop-down', IconArrowDropDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-drop-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-drop-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-drop-down': TSinchIconReact,
    }
  }
}
