import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCached = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cached', IconCached)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cached': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cached': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cached': TSinchIconReact,
    }
  }
}
