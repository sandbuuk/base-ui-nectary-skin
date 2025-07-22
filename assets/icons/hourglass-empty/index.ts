import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHourglassEmpty = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hourglass-empty', IconHourglassEmpty)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hourglass-empty': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hourglass-empty': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hourglass-empty': TSinchIconReact,
    }
  }
}
