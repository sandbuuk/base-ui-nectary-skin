import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderClear = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-clear', IconBorderClear)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-clear': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-clear': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-clear': TSinchIconReact,
    }
  }
}
