import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLabelImportant = createIconClass(templateHTML)
defineCustomElement('sinch-icon-label-important', IconLabelImportant)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-label-important': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-label-important': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-label-important': TSinchIconReact,
    }
  }
}
