import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBallot = createIconClass(templateHTML)
defineCustomElement('sinch-icon-ballot', IconBallot)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-ballot': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ballot': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-ballot': TSinchIconReact,
    }
  }
}
