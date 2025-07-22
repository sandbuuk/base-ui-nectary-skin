import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCastConnected = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cast-connected', IconCastConnected)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cast-connected': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cast-connected': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cast-connected': TSinchIconReact,
    }
  }
}
