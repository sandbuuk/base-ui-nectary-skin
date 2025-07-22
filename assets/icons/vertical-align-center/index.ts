import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalAlignCenter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-align-center', IconVerticalAlignCenter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-align-center': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-align-center': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-align-center': TSinchIconReact,
    }
  }
}
