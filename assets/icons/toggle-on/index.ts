import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToggleOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-toggle-on', IconToggleOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-toggle-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toggle-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-toggle-on': TSinchIconReact,
    }
  }
}
