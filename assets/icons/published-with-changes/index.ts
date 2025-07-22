import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPublishedWithChanges = createIconClass(templateHTML)
defineCustomElement('sinch-icon-published-with-changes', IconPublishedWithChanges)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-published-with-changes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-published-with-changes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-published-with-changes': TSinchIconReact,
    }
  }
}
