import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalAlignBottom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-align-bottom', IconVerticalAlignBottom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-align-bottom': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-align-bottom': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-align-bottom': TSinchIconReact,
    }
  }
}
