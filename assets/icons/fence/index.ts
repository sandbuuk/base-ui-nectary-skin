import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFence = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fence', IconFence)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fence': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fence': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fence': TSinchIconReact,
    }
  }
}
