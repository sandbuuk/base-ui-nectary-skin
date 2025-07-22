import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMap = createIconClass(templateHTML)
defineCustomElement('sinch-icon-map', IconMap)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-map': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-map': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-map': TSinchIconReact,
    }
  }
}
