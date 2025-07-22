import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsVolleyball = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-volleyball', IconSportsVolleyball)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-volleyball': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-volleyball': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-volleyball': TSinchIconReact,
    }
  }
}
