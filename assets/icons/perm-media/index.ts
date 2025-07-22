import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPermMedia = createIconClass(templateHTML)
defineCustomElement('sinch-icon-perm-media', IconPermMedia)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-perm-media': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-media': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-perm-media': TSinchIconReact,
    }
  }
}
