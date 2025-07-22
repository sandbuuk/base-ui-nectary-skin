import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpellcheck = createIconClass(templateHTML)
defineCustomElement('sinch-icon-spellcheck', IconSpellcheck)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-spellcheck': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-spellcheck': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-spellcheck': TSinchIconReact,
    }
  }
}
