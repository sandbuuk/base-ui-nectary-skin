import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGames = createIconClass(templateHTML)
defineCustomElement('sinch-icon-games', IconGames)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-games': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-games': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-games': TSinchIconReact,
    }
  }
}
