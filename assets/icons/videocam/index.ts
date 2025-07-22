import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVideocam = createIconClass(templateHTML)
defineCustomElement('sinch-icon-videocam', IconVideocam)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-videocam': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-videocam': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-videocam': TSinchIconReact,
    }
  }
}
