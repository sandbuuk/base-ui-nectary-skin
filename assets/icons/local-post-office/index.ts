import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPostOffice = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-post-office', IconLocalPostOffice)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-post-office': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-post-office': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-post-office': TSinchIconReact,
    }
  }
}
