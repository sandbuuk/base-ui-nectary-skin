import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerticalShades = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vertical-shades', IconVerticalShades)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-shades': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-shades': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vertical-shades': TSinchIconReact,
    }
  }
}
