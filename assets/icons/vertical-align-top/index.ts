import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalAlignTop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-align-top', IconVerticalAlignTop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-align-top': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-align-top': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-align-top': TSinchIconReact,
    }
  }
}
