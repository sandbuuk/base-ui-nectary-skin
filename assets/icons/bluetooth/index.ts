import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBluetooth = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bluetooth', IconBluetooth)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bluetooth': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bluetooth': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bluetooth': TSinchIconReact,
    }
  }
}
