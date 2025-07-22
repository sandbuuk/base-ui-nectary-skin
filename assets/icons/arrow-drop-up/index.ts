import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowDropUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-drop-up', IconArrowDropUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-drop-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-drop-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-drop-up': TSinchIconReact,
    }
  }
}
