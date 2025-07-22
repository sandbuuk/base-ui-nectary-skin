import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightnessLow = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-low', IconBrightnessLow)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-low': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-low': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-low': TSinchIconReact,
    }
  }
}
