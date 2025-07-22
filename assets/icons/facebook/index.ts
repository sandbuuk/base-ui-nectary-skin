import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFacebook = createIconClass(templateHTML)
defineCustomElement('sinch-icon-facebook', IconFacebook)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-facebook': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-facebook': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-facebook': TSinchIconReact,
    }
  }
}
