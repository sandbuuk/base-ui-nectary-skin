import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVolumeUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-volume-up', IconVolumeUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-volume-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-volume-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-volume-up': TSinchIconReact,
    }
  }
}
