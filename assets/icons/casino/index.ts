import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCasino = createIconClass(templateHTML)
defineCustomElement('sinch-icon-casino', IconCasino)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-casino': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-casino': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-casino': TSinchIconReact,
    }
  }
}
