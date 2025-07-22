import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDesktopMac = createIconClass(templateHTML)
defineCustomElement('sinch-icon-desktop-mac', IconDesktopMac)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-desktop-mac': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-desktop-mac': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-desktop-mac': TSinchIconReact,
    }
  }
}
