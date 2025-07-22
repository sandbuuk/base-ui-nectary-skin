import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToc = createIconClass(templateHTML)
defineCustomElement('sinch-icon-toc', IconToc)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-toc': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toc': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-toc': TSinchIconReact,
    }
  }
}
