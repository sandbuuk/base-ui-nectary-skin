import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDragHandle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-drag-handle', IconDragHandle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-drag-handle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-drag-handle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-drag-handle': TSinchIconReact,
    }
  }
}
