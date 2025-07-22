import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlurOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blur-on', IconBlurOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blur-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blur-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blur-on': TSinchIconReact,
    }
  }
}
