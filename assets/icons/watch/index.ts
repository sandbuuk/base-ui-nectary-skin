import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWatch = createIconClass(templateHTML)
defineCustomElement('sinch-icon-watch', IconWatch)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-watch': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-watch': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-watch': TSinchIconReact,
    }
  }
}
