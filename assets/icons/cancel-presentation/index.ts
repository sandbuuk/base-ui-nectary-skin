import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCancelPresentation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cancel-presentation', IconCancelPresentation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cancel-presentation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cancel-presentation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cancel-presentation': TSinchIconReact,
    }
  }
}
