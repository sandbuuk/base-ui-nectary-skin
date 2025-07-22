import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhonelink = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phonelink', IconPhonelink)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phonelink': TSinchIconReact,
    }
  }
}
