import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsHandball = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-handball', IconSportsHandball)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-handball': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-handball': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-handball': TSinchIconReact,
    }
  }
}
