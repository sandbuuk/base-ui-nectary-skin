import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeveloperBoard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-developer-board', IconDeveloperBoard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-developer-board': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-developer-board': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-developer-board': TSinchIconReact,
    }
  }
}
