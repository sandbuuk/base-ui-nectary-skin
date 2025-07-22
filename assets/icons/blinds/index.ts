import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlinds = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blinds', IconBlinds)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blinds': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blinds': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blinds': TSinchIconReact,
    }
  }
}
