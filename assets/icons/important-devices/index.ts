import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconImportantDevices = createIconClass(templateHTML)
defineCustomElement('sinch-icon-important-devices', IconImportantDevices)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-important-devices': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-important-devices': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-important-devices': TSinchIconReact,
    }
  }
}
