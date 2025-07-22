import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPerson = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person', IconPerson)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person': TSinchIconReact,
    }
  }
}
