import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSaveAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-save-alt', IconSaveAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-save-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-save-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-save-alt': TSinchIconReact,
    }
  }
}
