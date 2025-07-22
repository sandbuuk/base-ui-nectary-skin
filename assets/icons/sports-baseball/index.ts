import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsBaseball = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-baseball', IconSportsBaseball)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-baseball': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-baseball': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-baseball': TSinchIconReact,
    }
  }
}
