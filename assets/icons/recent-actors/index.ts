import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRecentActors = createIconClass(templateHTML)
defineCustomElement('sinch-icon-recent-actors', IconRecentActors)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-recent-actors': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-recent-actors': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-recent-actors': TSinchIconReact,
    }
  }
}
