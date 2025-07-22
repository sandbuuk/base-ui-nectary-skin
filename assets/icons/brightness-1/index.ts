import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightness1 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-1', IconBrightness1)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-1': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-1': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-1': TSinchIconReact,
    }
  }
}
