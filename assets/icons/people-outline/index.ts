import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPeopleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-people-outline', IconPeopleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-people-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-people-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-people-outline': TSinchIconReact,
    }
  }
}
