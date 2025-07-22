import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowForwardIos = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-forward-ios', IconArrowForwardIos)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-forward-ios': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-forward-ios': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-forward-ios': TSinchIconReact,
    }
  }
}
