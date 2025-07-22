import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalCellularAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-cellular-alt', IconSignalCellularAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-cellular-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-cellular-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-cellular-alt': TSinchIconReact,
    }
  }
}
