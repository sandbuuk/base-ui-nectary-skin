import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconModeComment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mode-comment', IconModeComment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mode-comment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mode-comment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mode-comment': TSinchIconReact,
    }
  }
}
