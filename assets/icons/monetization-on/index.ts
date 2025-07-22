import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMonetizationOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-monetization-on', IconMonetizationOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-monetization-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-monetization-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-monetization-on': TSinchIconReact,
    }
  }
}
