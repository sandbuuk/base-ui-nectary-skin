import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlaky = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flaky', IconFlaky)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flaky': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flaky': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flaky': TSinchIconReact,
    }
  }
}
