import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVolumeDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-volume-down', IconVolumeDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-volume-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-volume-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-volume-down': TSinchIconReact,
    }
  }
}
