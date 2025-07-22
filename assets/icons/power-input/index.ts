import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPowerInput = createIconClass(templateHTML)
defineCustomElement('sinch-icon-power-input', IconPowerInput)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-power-input': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-power-input': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-power-input': TSinchIconReact,
    }
  }
}
