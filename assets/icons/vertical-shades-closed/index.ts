import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalShadesClosed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-shades-closed', IconVerticalShadesClosed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-shades-closed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-shades-closed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-shades-closed': TSinchIconReact,
    }
  }
}
