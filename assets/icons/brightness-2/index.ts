import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightness2 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-2', IconBrightness2)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-2': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-2': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-2': TSinchIconReact,
    }
  }
}
