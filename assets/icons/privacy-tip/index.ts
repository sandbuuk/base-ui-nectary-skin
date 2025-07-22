import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPrivacyTip = createIconClass(templateHTML)
defineCustomElement('sinch-icon-privacy-tip', IconPrivacyTip)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-privacy-tip': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-privacy-tip': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-privacy-tip': TSinchIconReact,
    }
  }
}
