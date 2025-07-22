import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDoneAll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-done-all', IconDoneAll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-done-all': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-done-all': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-done-all': TSinchIconReact,
    }
  }
}
