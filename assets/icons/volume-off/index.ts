import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVolumeOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-volume-off', IconVolumeOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-volume-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-volume-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-volume-off': TSinchIconReact,
    }
  }
}
