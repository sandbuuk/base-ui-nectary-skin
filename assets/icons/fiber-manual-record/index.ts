import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFiberManualRecord = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fiber-manual-record', IconFiberManualRecord)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-manual-record': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-manual-record': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fiber-manual-record': TSinchIconReact,
    }
  }
}
