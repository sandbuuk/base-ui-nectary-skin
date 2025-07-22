import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPageview = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pageview', IconPageview)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pageview': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pageview': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pageview': TSinchIconReact,
    }
  }
}
