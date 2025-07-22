import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-left', IconBorderLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-left': TSinchIconReact,
    }
  }
}
