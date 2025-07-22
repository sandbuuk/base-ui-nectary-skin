import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDvr = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dvr', IconDvr)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dvr': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dvr': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dvr': TSinchIconReact,
    }
  }
}
