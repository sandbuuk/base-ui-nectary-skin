import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHearingDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hearing-disabled', IconHearingDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hearing-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hearing-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hearing-disabled': TSinchIconReact,
    }
  }
}
