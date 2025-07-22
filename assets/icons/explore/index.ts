import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExplore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-explore', IconExplore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-explore': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-explore': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-explore': TSinchIconReact,
    }
  }
}
