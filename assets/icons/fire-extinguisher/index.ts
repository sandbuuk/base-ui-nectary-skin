import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFireExtinguisher = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fire-extinguisher', IconFireExtinguisher)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fire-extinguisher': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fire-extinguisher': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fire-extinguisher': TSinchIconReact,
    }
  }
}
