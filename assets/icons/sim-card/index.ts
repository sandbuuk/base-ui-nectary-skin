import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSimCard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sim-card', IconSimCard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sim-card': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sim-card': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sim-card': TSinchIconReact,
    }
  }
}
