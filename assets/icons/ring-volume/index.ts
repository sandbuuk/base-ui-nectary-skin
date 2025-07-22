import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRingVolume = createIconClass(templateHTML)
defineCustomElement('sinch-icon-ring-volume', IconRingVolume)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-ring-volume': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ring-volume': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-ring-volume': TSinchIconReact,
    }
  }
}
