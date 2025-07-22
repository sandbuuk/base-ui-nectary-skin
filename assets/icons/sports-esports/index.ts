import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsEsports = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-esports', IconSportsEsports)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-esports': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-esports': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-esports': TSinchIconReact,
    }
  }
}
