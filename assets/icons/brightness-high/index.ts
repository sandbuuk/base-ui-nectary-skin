import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightnessHigh = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-high', IconBrightnessHigh)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-high': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-high': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-high': TSinchIconReact,
    }
  }
}
