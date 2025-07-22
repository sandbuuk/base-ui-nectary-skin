import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDynamicFeed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dynamic-feed', IconDynamicFeed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dynamic-feed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dynamic-feed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dynamic-feed': TSinchIconReact,
    }
  }
}
