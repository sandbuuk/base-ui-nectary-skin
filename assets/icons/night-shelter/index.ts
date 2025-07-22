import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNightShelter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-night-shelter', IconNightShelter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-night-shelter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-night-shelter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-night-shelter': TSinchIconReact,
    }
  }
}
