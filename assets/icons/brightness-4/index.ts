import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightness4 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-4', IconBrightness4)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-4': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-4': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-4': TSinchIconReact,
    }
  }
}
