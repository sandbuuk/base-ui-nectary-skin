import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShieldMoon = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shield-moon', IconShieldMoon)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shield-moon': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shield-moon': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shield-moon': TSinchIconReact,
    }
  }
}
