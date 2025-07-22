import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalMall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-mall', IconLocalMall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-mall': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-mall': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-mall': TSinchIconReact,
    }
  }
}
