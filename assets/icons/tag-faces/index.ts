import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTagFaces = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tag-faces', IconTagFaces)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tag-faces': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tag-faces': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tag-faces': TSinchIconReact,
    }
  }
}
