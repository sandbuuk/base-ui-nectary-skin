import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExploreOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-explore-off', IconExploreOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-explore-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-explore-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-explore-off': TSinchIconReact,
    }
  }
}
