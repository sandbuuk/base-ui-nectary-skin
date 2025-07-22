import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPublish = createIconClass(templateHTML)
defineCustomElement('sinch-icon-publish', IconPublish)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-publish': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-publish': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-publish': TSinchIconReact,
    }
  }
}
