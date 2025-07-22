import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCurtains = createIconClass(templateHTML)
defineCustomElement('sinch-icon-curtains', IconCurtains)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-curtains': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-curtains': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-curtains': TSinchIconReact,
    }
  }
}
