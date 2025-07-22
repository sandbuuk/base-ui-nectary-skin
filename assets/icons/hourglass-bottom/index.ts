import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHourglassBottom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hourglass-bottom', IconHourglassBottom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hourglass-bottom': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hourglass-bottom': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hourglass-bottom': TSinchIconReact,
    }
  }
}
