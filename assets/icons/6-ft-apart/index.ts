import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const Icon6FtApart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-6-ft-apart', Icon6FtApart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-6-ft-apart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-6-ft-apart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-6-ft-apart': TSinchIconReact,
    }
  }
}
