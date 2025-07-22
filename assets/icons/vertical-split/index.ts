import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalSplit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-split', IconVerticalSplit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-split': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-split': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-split': TSinchIconReact,
    }
  }
}
