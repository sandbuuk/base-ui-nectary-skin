import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSuperscript = createIconClass(templateHTML)
defineCustomElement('sinch-icon-superscript', IconSuperscript)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-superscript': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-superscript': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-superscript': TSinchIconReact,
    }
  }
}
