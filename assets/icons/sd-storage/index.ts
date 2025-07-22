import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSdStorage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sd-storage', IconSdStorage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sd-storage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sd-storage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sd-storage': TSinchIconReact,
    }
  }
}
