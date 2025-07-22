import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssistant = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assistant', IconAssistant)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assistant': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assistant': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assistant': TSinchIconReact,
    }
  }
}
