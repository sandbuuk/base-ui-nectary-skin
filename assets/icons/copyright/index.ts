import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCopyright = createIconClass(templateHTML)
defineCustomElement('sinch-icon-copyright', IconCopyright)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-copyright': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-copyright': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-copyright': TSinchIconReact,
    }
  }
}
