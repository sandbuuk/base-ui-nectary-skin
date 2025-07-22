import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSave = createIconClass(templateHTML)
defineCustomElement('sinch-icon-save', IconSave)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-save': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-save': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-save': TSinchIconReact,
    }
  }
}
