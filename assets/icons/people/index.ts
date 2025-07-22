import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPeople = createIconClass(templateHTML)
defineCustomElement('sinch-icon-people', IconPeople)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-people': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-people': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-people': TSinchIconReact,
    }
  }
}
