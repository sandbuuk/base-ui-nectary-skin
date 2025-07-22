import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGTranslate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-g-translate', IconGTranslate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-g-translate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-g-translate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-g-translate': TSinchIconReact,
    }
  }
}
