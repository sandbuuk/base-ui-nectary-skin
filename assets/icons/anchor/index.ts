import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAnchor = createIconClass(templateHTML)
defineCustomElement('sinch-icon-anchor', IconAnchor)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-anchor': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-anchor': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-anchor': TSinchIconReact,
    }
  }
}
