import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBluetoothSearching = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bluetooth-searching', IconBluetoothSearching)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bluetooth-searching': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bluetooth-searching': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bluetooth-searching': TSinchIconReact,
    }
  }
}
