import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPermScanWifi = createIconClass(templateHTML)
defineCustomElement('sinch-icon-perm-scan-wifi', IconPermScanWifi)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-perm-scan-wifi': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-scan-wifi': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-perm-scan-wifi': TSinchIconReact,
    }
  }
}
