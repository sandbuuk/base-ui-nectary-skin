import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTranslate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-translate', IconTranslate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-translate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-translate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-translate': TSinchIconReact,
    }
  }
}
