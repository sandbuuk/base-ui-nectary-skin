import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStayCurrentPortrait = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stay-current-portrait', IconStayCurrentPortrait)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stay-current-portrait': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-current-portrait': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stay-current-portrait': TSinchIconReact,
    }
  }
}
