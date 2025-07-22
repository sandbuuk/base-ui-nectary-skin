import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMergeType = createIconClass(templateHTML)
defineCustomElement('sinch-icon-merge-type', IconMergeType)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-merge-type': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-merge-type': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-merge-type': TSinchIconReact,
    }
  }
}
