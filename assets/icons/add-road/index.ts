import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddRoad = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-road', IconAddRoad)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-road': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-road': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-road': TSinchIconReact,
    }
  }
}
