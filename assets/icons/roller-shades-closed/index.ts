import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRollerShadesClosed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-roller-shades-closed', IconRollerShadesClosed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-roller-shades-closed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-roller-shades-closed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-roller-shades-closed': TSinchIconReact,
    }
  }
}
