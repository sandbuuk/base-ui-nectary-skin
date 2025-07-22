import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPersonAddDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person-add-disabled', IconPersonAddDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person-add-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-add-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person-add-disabled': TSinchIconReact,
    }
  }
}
