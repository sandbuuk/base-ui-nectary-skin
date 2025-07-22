import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEditRoad = createIconClass(templateHTML)
defineCustomElement('sinch-icon-edit-road', IconEditRoad)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-edit-road': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-edit-road': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-edit-road': TSinchIconReact,
    }
  }
}
