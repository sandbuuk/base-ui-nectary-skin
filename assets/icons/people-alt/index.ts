import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPeopleAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-people-alt', IconPeopleAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-people-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-people-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-people-alt': TSinchIconReact,
    }
  }
}
