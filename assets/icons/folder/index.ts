import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFolder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-folder', IconFolder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-folder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-folder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-folder': TSinchIconReact,
    }
  }
}
