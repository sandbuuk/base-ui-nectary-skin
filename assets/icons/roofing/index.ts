import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRoofing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-roofing', IconRoofing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-roofing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-roofing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-roofing': TSinchIconReact,
    }
  }
}
