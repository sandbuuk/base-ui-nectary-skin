import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-done', IconDone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-done': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-done': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-done': TSinchIconReact,
    }
  }
}
