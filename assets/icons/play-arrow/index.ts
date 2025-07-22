import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlayArrow = createIconClass(templateHTML)
defineCustomElement('sinch-icon-play-arrow', IconPlayArrow)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-play-arrow': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-play-arrow': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-play-arrow': TSinchIconReact,
    }
  }
}
