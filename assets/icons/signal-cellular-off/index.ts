import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalCellularOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-cellular-off', IconSignalCellularOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-cellular-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-cellular-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-cellular-off': TSinchIconReact,
    }
  }
}
