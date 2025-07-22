import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDoneOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-done-outline', IconDoneOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-done-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-done-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-done-outline': TSinchIconReact,
    }
  }
}
