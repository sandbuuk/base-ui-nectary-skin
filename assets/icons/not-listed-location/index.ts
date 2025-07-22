import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotListedLocation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-not-listed-location', IconNotListedLocation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-not-listed-location': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-not-listed-location': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-not-listed-location': TSinchIconReact,
    }
  }
}
