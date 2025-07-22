import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewAgenda = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-agenda', IconViewAgenda)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-agenda': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-agenda': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-agenda': TSinchIconReact,
    }
  }
}
