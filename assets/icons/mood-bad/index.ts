import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoodBad = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mood-bad', IconMoodBad)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mood-bad': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mood-bad': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mood-bad': TSinchIconReact,
    }
  }
}
