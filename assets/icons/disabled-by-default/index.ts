import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDisabledByDefault = createIconClass(templateHTML)
defineCustomElement('sinch-icon-disabled-by-default', IconDisabledByDefault)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-disabled-by-default': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-disabled-by-default': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-disabled-by-default': TSinchIconReact,
    }
  }
}
